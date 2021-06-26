// IMPORTANT: install @types/react-router-dom for Typescript purposes
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { AuthContextProvider } from "./contexts/AuthContexts";
import { Room } from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/room/new" component={NewRoom}/>
          <Route path="/room/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>   
    </BrowserRouter>
  );
}

export default App;
