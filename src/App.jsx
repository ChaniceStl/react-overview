const React = require('react')
const {render} = require('react-dom')
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
const App = () => {
	return(
		<div>
			Hello World
		</div>
		)
}

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}/>
	<Router/>
	,
	document.getElementById("app")
	)
	