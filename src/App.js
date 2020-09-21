import React from 'react';
import Provider from './Providers/index'
import HeaderComponent from './components/headerComponent/index'

function App() {
  return (
    <Provider>
      <HeaderComponent />
    </Provider>
  );
}

export default App;
