import { BrowserRouter, Route, Switch } from 'react-router-dom'
import details from './components/details/details';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Faq from './pages/FAQ/FAQ';
import Home from './pages/Home';
import Members from './pages/Members/Members';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './pages/Privacy/Privacy';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';

function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/faq' component={Faq} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/members' component={Members} />
        <Route path='/contact' component={Contact} />
        <Route path='/shop' component={Shop} />
        <Route path='/about' component={About} />
        <Route path='/shipping-policy' component={Privacy} />
        <Route path='/details/:id' component={details} />
        <Route path='/product/:id' component={Product} />
        <Route component={NotFound} />
      </Switch>
      <Footer />

    </BrowserRouter>
  </>
}

export default App;
