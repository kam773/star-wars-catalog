import Catalog from './components/catalog';
import Profile from './components/common/profile';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Catalog}/>
        <Route path="/profile/:id" component={Profile}/>
      </Switch>
    </main>
  );
}

export default App;
