import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import RecVideos from './RecVideos';
import SearchPage from './SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="app">
     {/* <h1>Meet</h1> */}

    <Router>
       <Header/>
      <Switch>
      <Route path="/search/:searchTerm">
        <div className="app__page">
          <SideBar/>
          <SearchPage/>  
          </div>
        </Route>
        <Route path="/">
        <div className="app__page">
          <SideBar/>
          <RecVideos/>
        </div>
        </Route>
        
      </Switch>
    </Router>


    
    </div>
    );
}

export default App;
