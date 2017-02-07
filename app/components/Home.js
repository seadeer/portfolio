var React = require('react');
var Circle = require('./Circle');
var About = require('./About');
var Projects = require('./Projects/Projects')
require('../css/styles.css');

var Home = React.createClass({
    getInitialState: function(){
        return{
            mouseX: 0,
            mouseY: 0
        };
    },
    HandleMouse: function(event){
        event.preventDefault();
        this.setState({
            mouseX: event.clientX,
            mouseY: event.clientY
        })
    },
    render: function(){
       return(
       <div onMouseMove={(event) => this.HandleMouse(event)} className="container" >
            <Circle x={this.state.mouseX} y={this.state.mouseY}/>
            <About/>
            <Projects/>
            </div>
        )
    }
})


module.exports = Home;
