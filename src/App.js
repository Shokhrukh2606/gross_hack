import React, { Component, Suspense } from 'react';
import { Route,  Switch, Router } from 'react-router-dom';
import Aux from "./hoc/_Aux";
import routes from "./routes";
import Preloader from './components/Preloader'
import {history} from './helpers/history'

const MainLayout = React.lazy(() => import('./containers/MainLayout'));


const App=()=>{
     const menu = routes.map((route, index) => {
        return (route.component) ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                    <route.component {...props} />
                )} />
        ) : (null);
      });
       return (
      <Router history={history} >
        <React.Suspense fallback={<Preloader/>}>
          <Switch>
            <Route  path="/" name="Main Page" render={props => <MainLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    );
      
}

export default App;

