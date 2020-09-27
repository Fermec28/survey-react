import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { SurveyContext } from '../../Providers'

const ProtectedRoute = ({ children: Component, ...rest }) => {
  const { isLogin } = useContext(SurveyContext)
  console.log(isLogin)
  return (
    isLogin ? (
      <Route {...rest} children={Component} />
    ) : (
        <div> Debes estar logeado</div>
      ));
};

export default ProtectedRoute;