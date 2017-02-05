var React = require('react');
var Home = require('../components/Home');
var Router = require('react-router');
var Route = Router.Route;
var router = Router.Router;
var IndexRoute = Router.IndexRoute;
var browserHistory = Router.browserHistory;

module.exports = (
    <router history={browserHistory}>
        <Route path="/" component={Home}>
        <IndexRoute component={Home}/>
        </Route>
    </router>
    );
