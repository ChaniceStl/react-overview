import React from 'react'
import {Link} from 'react-router'

class Main extends React.Component{
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
}

export default Main