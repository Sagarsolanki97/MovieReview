import React from "react";
import "./App.css";
import Header from "./Header";
import Movies from "./component/Movies";
import movies from "./movie.json";


// let Name = "SAGAR";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {
            movies.map((element)=>{
                return(
                <Movies title = {element.title}
                year = {element.year}
                img ={element.posterurl}
                />
                )
            })
        }
       

         </div>
    </div>
  );
};
export default App;
