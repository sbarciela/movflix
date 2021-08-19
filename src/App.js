//React Router
import { Route , Switch} from "react-router-dom"
//Pages
import Home from "./Pages/Home"
import Detail from "./Pages/Detail";
import SearchResults from "./Pages/Searchresults";
import Favourites from "./Pages/Favourites";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//CSS
import "./assets/css/bootstrap.min.css"

function App() {
  
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
        <Route path="/search-results" component={SearchResults}/>
        <Route path="/favourites" component={Favourites} />
        
      </Switch>

      <Footer />
   
    </>
  );
}

export default App;
