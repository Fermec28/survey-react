import React, { useContext, useState } from 'react';
import { SurveyContext } from '../../Providers/index'
import LoginForm from '../../views/LoginForm/index'
import SingupForm from '../../views/SingUpForm/index'
import PortalModalView from '../../views/PortalModalView/index'
import { loginRequest, signUpRequest } from '../../api/index'

const HeaderComponent = () => {
    const { isLogin, setUser, reset } = useContext(SurveyContext)
    const [loginModal, setLoginModal] = useState(false)
    const [singUpModal, setsingUpModal] = useState(false)

    const toggleLoginModal = () => {
        setLoginModal(!loginModal)
    }
    const handleLoginSubmit = async (data) => {
        //call api get response if not alert
        const { status, body } = await loginRequest(data)
        console.log(status)
        if (status !== 200)
            alert('something is wrong, be sure you are giving the correct credentials')
        else
            setUser({ isLogin: true, token: body.Authorization })
        setLoginModal(false)
    }

    const toggleSignUpModal = () => {
        setsingUpModal(!singUpModal)
    }

    const handleSingupSubmit = async (data) => {
        //call api get response if not alert
        const { email, password, passwordConfirmation: password_confirmation } = data
        const { status, body } = await signUpRequest({ email, password, password_confirmation })
        if (status !== 201)
            alert('something is wrong, be sure you are giving the correct credentials')
        else
            setUser({ isLogin: true, token: body.Authorization })
        setsingUpModal(false)
    }


    if (isLogin) {
        return <div onClick={reset}>LogOut</div>
    }
    return (<div>
        <div onClick={toggleLoginModal}>Login</div>
        <PortalModalView visible={loginModal} onToggle={toggleLoginModal}>
            <LoginForm handleSubmit={handleLoginSubmit} />
        </PortalModalView>
        <div onClick={toggleSignUpModal}>SignUp</div>
        <PortalModalView visible={singUpModal} onToggle={toggleSignUpModal}>
            <SingupForm handleSubmit={handleSingupSubmit} />
        </PortalModalView>

    </div>)
}

export default HeaderComponent;
