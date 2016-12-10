import React from 'react'
import {Link} from 'react-router'

var Main = React.createClass({
	render(){
		return (
			<div>
				<Link to='/'>Settings   </Link>

				<Link to='/'>Profile   </Link>

				<Link to='/'>Help   </Link>
				{this.props.children}
			</div>
			)
	}
})

export default Main