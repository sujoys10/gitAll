import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Profile = lazy(() => import('./Profile'));

const AppRouter = () => (
    <Suspense fallback={<div>loading...</div>}>
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="profile" component={Profile}/>
            </Switch>
        </Router>
    </Suspense>
)

export default AppRouter;