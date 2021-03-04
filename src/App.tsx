import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css'
import { AboutPages } from './pages/AboutPages';
import { TodosPages } from './pages/TodosPages';


const App: React.FC = () => {
 
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route component={TodosPages} path="/" exact/>
          <Route component={AboutPages} path="/about"/>
        </Switch>
      </div>
    </BrowserRouter>
  )

}


export default App;
