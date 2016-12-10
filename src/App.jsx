import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
//Component
import Main from './main'
import Intro from './intro'
import Button from './button'

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
		<IndexRoute component={Intro}/>
		<Route path='/button' component={Button}/>
		</Route>
	</Router>
	,
	document.getElementById("app")
	)
	
