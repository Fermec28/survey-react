import React from 'react'
import { surveyActions } from '../Actions/index'
import { initialState } from '../constants/index'
import { surveyReducer } from '../Reducers/index'


const SurveyContext = React.createContext();

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(surveyReducer, initialState);

  const value = {
    isLogin: state.isLogin,
    token: state.token,
    setUser: (value) => {
      dispatch({ type: surveyActions.SET_USER, value });
    },
    reset: () => {
      dispatch({ type: surveyActions.RESET });
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