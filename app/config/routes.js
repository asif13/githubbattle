var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer')
var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='playerOne' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='playerTwo' component={PromptContainer} />
        </Route>
    </Router>
);
module.exports = routes;

// <Route path='/playerOne' header='playerOne' component={PropmptContainer} />
// <Route path='/playerTwo/:playerOne' header='playerTwo' component={PropmptContainer} />
// <Route path='/battle' component={ConfirmBattleContainer} />
// <Route path='results' component={ResultsContainer} />