import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Usercreate from "./Users/Usercreate";
import Useredit from "./Users/Useredit";
import { UserProvider } from "./Common/UserContext"; 
import Login from "./Users/Login";
function App() {
  return (

    <UserProvider>
    <Router>
    <Switch>
    {console.log(localStorage.getItem("email"))}
    {localStorage.getItem("email") ===null&& <div>
  <Route path="/"  exact component={Login} />
  <Redirect to="/" /></div>}</Switch>
  {localStorage.getItem("email") !=null&& <div>

    <div id="wrapper">
   
      <Sidebar></Sidebar>
      <div id="content-wrapper" class="d-flex flex-column">
   
      <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
     <switch>
    <Route path="/Dashboard"  exact component={Dashboard} />
    <Route path="/user" exact component={Users} />
    <Route path="/User-create/"  component={Usercreate} />
    <Route path="/User-Edit/:id"  component={Useredit} /></switch>
    </div>  
      </div>
      </div>
      </div>
    </div>}
    </Router>
    </UserProvider>
  );
}

export default App;
