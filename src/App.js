import React from "react";
import { Route, Routes } from "react-router-dom";
import MockMan from "mockman-js";
import "./App.css";

import { Explore, History, Home, Liked, Login, Playlist, Signup, WatchLater } from "./pages";
import Navbar from "./components/navbar/Navbar";
import Layout from "./layout/Layout";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
import PlaylistModal from "./components/modal/PlaylistModal";


function App() {
  
return (
    <>
    <PlaylistModal/>
    <Navbar/>
    
    <Routes>
      {/* Public Route */}
      <Route path="/mockman" element={<MockMan/>} />
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Layout><Home/></Layout>} />
      <Route path="/explore" element={<Layout><Explore/></Layout>} />
      {/* Private Route */}
      <Route path="/playlist" element={<PrivateRoute><Layout><Playlist/></Layout></PrivateRoute>} />
      <Route path="/liked" element={<PrivateRoute><Layout><Liked/></Layout></PrivateRoute>} />
      <Route path="/watchlater" element={<PrivateRoute><Layout><WatchLater/></Layout></PrivateRoute> } />
      <Route path="/history" element={<PrivateRoute><Layout><History/></Layout></PrivateRoute>} />
      
    </Routes>
    
    </>
    
);
   

}

export default App;
