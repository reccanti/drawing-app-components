var React = require('react');
var ReactDOM = require('react-dom');
var DrawingAppComponents = require('react-drawing-app-components');

var App = React.createClass({
	render () {
		return (
			<div>
				<DrawingAppComponents />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
