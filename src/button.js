import React from 'react'
import {Link} from 'react-router'
// import userObj from './src/test-api-obj';

var Button = React.createClass({
	getInitialState(){
		return({userName:""})
	},
	
	render(){
		return (
			<div>
				<h1>How's Life....</h1>
				<p>here we will give a brief description about why they are on this page<span />
					And have simple description in the button innerhtml to convey the product that pertain <span/>
					And that will send them to the particular product that best suits
				</p>
				<Link to="/product/:product"><button>product info 1</button></Link>
				<br />
				<Link to="/product/:product"><button>product info 2</button></Link>
				<br />
				<Link to="/product/:product"><button>product info 3</button></Link>
				<br />
					<Link to="/product/:product"><button>product info 4</button></Link>
			</div>
			)
	}
})

export default Button