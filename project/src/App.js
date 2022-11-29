import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Landing from "./Landing";


//    \ADMIN/   //
import ALogin from "./Admin/AdminLog";
import Dashboard from "./Admin/AdminDash";
import AdminNav from "./Admin/AdminNav";
import ChangeP from "./Admin/ChangeP";
import Approve from "./Admin/Approve";
import Users from "./Admin/Users";

//     \USER/    //
import UserReg from "./User/UserReg";
import UserLog from "./User/UserLog";
import UserDash from "./User/UserDash";
import UserProfile from "./User/UserProfile";
import UserNav from "./User/UserNav";
import UserChangeP from "./User/ChangeP";

//     \NGO/    //
import NgoReg from "./NGO/NgoReg";
import NgoLog from "./NGO/NgoLog";
import NgoNav from "./NGO/NgoNav";
import NgoDash from "./NGO/NgoDash";
import NgoProfile from "./NGO/NgoProfile";
import Events from "./NGO/Events";
import Post from "./Post";
import EditEvent from "./NGO/EditEvent";
import UserPost from "./User/Mypost";
import Blood from "./User/Blood";
import Finddonar from "./FindDonar";
import ViewNgo from "./Admin/ViewNgo";
import ViewPost from "./Admin/ViewPost";
import Doners from "./Doners";


function App() {
  return (
    <Router className="App">
      <Routes>

        <Route path="/Landing" element={<Home />}></Route>
        <Route path="/" element={<Landing />}></Route>

        {/*    \ADMIN/    */}
        <Route path="/AdminLog" element={<ALogin />}></Route>
        <Route path="/AdminDash" element={<Dashboard />}></Route>
        <Route path="/ChangeP" element={<ChangeP />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Ngo" element={<Approve />}></Route>
        <Route path='/ViewNgo' element={<ViewNgo />}></Route>
        <Route path='/ViewPost' element={<ViewPost />}></Route>


        {/*    \USER/    */}
        <Route path="/UserReg" element={<UserReg />}></Route>
        <Route path="/UserLog" element={<UserLog />}></Route>
        <Route path="/UserDash" element={<UserDash />}></Route>
        <Route path="/UserProfile" element={<UserProfile />}></Route>
        <Route path="/UserChangeP" element={<UserChangeP />}></Route>
        <Route path="/UserPost" element={<UserPost />}></Route>
        <Route path="/Blood" element={<Blood />}></Route>
        <Route path="/Finddonar" element={<Finddonar />}></Route>
        <Route path="/Donated" element={<Doners />}></Route>

        <Route path="/Post" element={<Post />}></Route>

        {/*    \NGO/    */}
        <Route path="/NgoReg" element={<NgoReg />}></Route>
        <Route path="/NgoLog" element={<NgoLog />}></Route>
        <Route path="/NgoDash" element={<NgoDash />}></Route>
        <Route path="/NgoProfile" element={<NgoProfile />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/EditEvent" element={<EditEvent />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
