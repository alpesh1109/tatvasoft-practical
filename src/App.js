
import './App.css';
import {Switch,Route} from "react-router-dom"
import Main from './components/Main';

function App() {
  return (
    <Switch>
      <Route path="/" component={Main}></Route>
    </Switch>
  );
}

export default App;
