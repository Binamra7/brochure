// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/gallery" exact component={Gallery}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer/>

      </Router>
    </div>
  );
}

export default App;
