import React from 'react'
import { sruveyActions } from '../Actions/index'
import { initialState } from '../constants/index'
import { surveyReducer } from '../Reducers/index'


const SurveyContext = React.createContext();

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(surveyReducer, initialState);

  const value = {
    isLogin: state.isLogin,
    token: state.token,
    setUser: (value) => {
      dispatch({ type: sruveyActions.SET_USER, value });
    },
    reset: () => {
      dispatch({ type: sruveyActions.RESET });
    }
  };

  return (
    <SurveyContext.Provider value={value}>
      {children}
    </SurveyContext.Provider>
  );
}

export { SurveyContext }
export default Provider;