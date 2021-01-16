import React from "react"
import './App.css';
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar"
import {useStateValue} from "./StateProvider";

function App() 
{
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
    {!user ? (
      <Login/>
    ):(
    <>
      <Header/>
      <div className="app-body">
        <Sidebar/>
       <Feed/>
        
      </div>
      </>
      )}

    </div>
  );
}

export default App;
