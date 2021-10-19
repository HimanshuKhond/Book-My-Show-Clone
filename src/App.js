//import './App.css';
import { Route } from "react-router-dom";

//axios
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
    {/* <Route path="/" exact component={Name} />
    <Route path="/movie" exact component={Name2} /> */}
  
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id" exact component={Movie} />
    <DefaultHOC path="/plays/:id" exact component={Plays} />
    </>
  );
};
// / , /movie
export default App;

/*
const champ = {
  name: "champ",
  dob: 1800
};
const student = champ;
student.goodStudent = true;

//SPREAD OPERATOR
const champ = {
  name: "champ",
  dob: 1800
};

const student = {...champ, goodStudent:true};
*/