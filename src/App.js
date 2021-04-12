import {BrowserRouter as Router,Switch, Route  } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navbar';
import Home from './Componentes/pages/Home';
import Consulting from './Componentes/pages/Consulting';
import Contacts from './Componentes/pages/Contacts';
import Design from './Componentes/pages/Design';
import Development from './Componentes/pages/Development';
import Marketing from './Componentes/pages/Marketing';
import Products from './Componentes/pages/Products';
import Services from './Componentes/pages/Services';
import SignUp from './Componentes/pages/SignUp';
import SignIn from './Componentes/pages/SignIn';

 
function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
               <Route path='/' exact component={Home}/>
               <Route path='/consulting' component={Consulting}/>
               <Route path='/contacts' component={Contacts}/>
               <Route path='/design' component={Design}/>
               <Route path='/development' component={Development}/>
               <Route path='/marketing' component={Marketing}/>
               <Route path='/products' component={Products}/>
               <Route path='/services' component={Services}/>
               <Route path='/signup' component={SignUp}/>
               <Route path='/signin' component={SignIn}/>
               <Route path='/services' component={Services}/>
        </Switch>
    </Router>
  );
}

export default App;
