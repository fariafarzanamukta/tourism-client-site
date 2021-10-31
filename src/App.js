import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Packages from './Pages/Packages/Packages';
import Events from './Pages/Events/Events';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login/Login'

import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AddPackages from './Pages/Add Packages/AddPackages';
import MyOrder from './Pages/MyOrder/MyOrder';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/packages">
              <Packages></Packages>
            </Route>

            <PrivateRoute exact path="/placeOrder/:packageId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route exact path="/events">
              <Events></Events>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/addPackages">
              <AddPackages></AddPackages>
            </Route>
            <Route exact path="/myOrder">
              <MyOrder></MyOrder>
            </Route>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>






    </div>
  );
}

export default App;
