import React from 'react';
import Provider from './Providers/index'
import HeaderComponent from './components/headerComponent/index'
import SurveysList from './components/survey/surveysListComponent/index'
import SurveyDetailHandler from './components/survey/surveyDetailHandler/index'
import SurveyStatistics from './components/survey/surveyStatistics/index'
import ProtectedRoute from './components/protectedRoute/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Provider>
      <HeaderComponent />
      <Router>
        <Switch>
          <ProtectedRoute exact path="/surveys/:id/statistics" children={<SurveyStatistics />} />
          <Route exact path="/surveys/:id" children={<SurveyDetailHandler />} />
          <ProtectedRoute exact path="/surveys" children={<SurveysList />} />
          <Redirect to="/surveys" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;