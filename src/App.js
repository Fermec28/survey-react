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
} from "react-router-dom";

function App() {
  return (
    <Provider>
      <HeaderComponent />
      <Router>
        <Switch>
          <ProtectedRoute path="/:id/statistics" children={<SurveyStatistics />} />
          <Route path="/:id" children={<SurveyDetailHandler />} />
          <ProtectedRoute path="/" children={<SurveysList />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;