import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidenav from './Components/Navbar/Sidenav';
import AllCategory from './Pages/AllCategory';
import AllProducts from './Pages/AllProducts';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import ProductDetails from './Pages/ProductDetails';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Sidenav/>
          <Switch>
              <Route exact path='/'component={Homepage}/>
              <Route exact path ='/register' component={Register}/>
              <Route exact path ='/login' component={Login}/>
              <Route exact path ='/products' component={AllProducts}/>
              <Route exact path ='/categories' component={AllCategory}/>
              <Route path ='/product/:slug' component={ProductDetails}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
