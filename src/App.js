import Navbar from "./navbar";
import Homepage from "./Home";
import Create from "./create";
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import BlogDetails from "./Blogdetails";
import NotFound from "./notFound";
function App() {

  return (
    <Router>
      <div className="app">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path= "/">
              <Homepage/>
            </Route>
            <Route exact path= "/create">
              <Create/>
            </Route>
            <Route exact path= "/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path ="*"> {/* "*" means any other path rather than mentioned above  */}
              <NotFound />
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
