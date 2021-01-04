import { BrowserRouter, Route, Switch } from 'react-router-dom'
import details from './components/details/details';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import Home from './components/pages/Home';

function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/details/:id' component={details} />
      </Switch>
      <Footer />

    </BrowserRouter>
  </>
}

export default App;
