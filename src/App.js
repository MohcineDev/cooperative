import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from './components/pages/Home';

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  </>
}

export default App;
