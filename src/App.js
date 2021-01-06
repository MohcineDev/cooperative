import { BrowserRouter, Route, Switch } from 'react-router-dom'
import details from './components/details/details';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import Faq from './components/pages/FAQ';
import Home from './components/pages/Home';
import Members from './components/pages/Members/Members';
import Privacy from './components/pages/Privacy';

function App() {

  return <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/faq' component={Faq} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/members' component={Members} />
        <Route path='/details/:id' component={details} />
      </Switch>
      <Footer />

    </BrowserRouter>
  </>
}

export default App;
