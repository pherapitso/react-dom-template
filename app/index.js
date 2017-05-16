var React = require('react');
var ReactDOM = require('react-dom');
require('./app-style.css');
 
 
class App extends React.Component{
    render(){
       return(
        <h1>React Template </h1>
 
       )
    }
}
 
ReactDOM.render(<App />,
 
document.getElementById('root'));
