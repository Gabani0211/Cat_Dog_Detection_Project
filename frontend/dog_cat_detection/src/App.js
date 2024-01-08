import './App.css';
import axios from 'axios';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom"
import CatDog from './Components/CatDog';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export var BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL
export var MIN_IO_DASHBOARD = process.env.REACT_APP_MIN_IO_DASHBOARD
export var ADMIN_PANEL = `${BASE_URL}/admin/`

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/cat_dog_images" Component={CatDog} />
      </Routes>
    </>
  )
}

export default App;
