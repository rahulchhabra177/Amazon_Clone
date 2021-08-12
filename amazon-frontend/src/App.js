import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Login"
import {useEffect} from "react"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
function App() {
	const [{},dispatch]=useStateValue();
	useEffect(()=>{
		auth.onAuthStateChanged(authUser=>{
			console.log("The user is:",authUser);
			if (authUser){
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

if (authUser){
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
	})
  return (
  	    <Router>

			    <div className="app">
			    									<Header/>

						<Switch>

						<Router path="/checkout">
									<Checkout/>
						    </Router>
						    <Router path="/login">
<Login/>						    </Router>
						    <Router path="/">
									<Home/>
						    </Router>
						      <Router path="">
									<Home/>
						    </Router>
						     
						</Switch>
    </div>
        </Router>

  );
}

export default App;
