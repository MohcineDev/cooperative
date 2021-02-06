import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Details from './pages/Details/Details';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs.js';
import Contact from './pages/Contact/Contact';
import Faq from './pages/FAQ/FAQ';
import Home from './pages/Home';
import Members from './pages/Members/Members';
import NotFound from './pages/NotFound/NotFound';
import Privacy from './pages/Privacy/Privacy';
import Product from './pages/Product/Product';
import Shop from './pages/Shop/Shop';
import SingleBlog from './pages/SingleBlog/SingleBlog';

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
        <Route path='/details/:id' component={Details} />
        <Route path='/product/:id' component={Product} />
        <Route path='/blog' exact component={Blogs} /> {/* important to add exact */}
        <Route path='/blog/:id' component={SingleBlog} />

        <Route component={NotFound} />
      </Switch>
      <ScrollToTop />

      <Footer />

    </BrowserRouter>
  </>
}

export default App;
