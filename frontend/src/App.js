import React from 'react'

//Global Style
import GlobalStyle from './components/GlobalStyle'

//Roteamento
import { BrowserRouter, Route } from 'react-router-dom'


// Components
import AboutUs from './pages/AboutUs'


function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/">
          <AboutUs />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
