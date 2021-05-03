import React,{useEffect} from "react"
import Header from "./Header"
import Home from "./Home"
import CheckOut from "./CheckOut"
import Login from "./Login"
import Payment from "./Payment"
import "./App.css"
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
           type:"SET_USER",
          user:null
        })
      }
    })
    return () => {
     
    }
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <CheckOut />
          </Route>
           <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
