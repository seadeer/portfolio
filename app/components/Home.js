var React = require('react');
var Circle = require('./Circle');
var About = require('./About');
var Projects = require('./Projects/Projects')
require('../css/styles.css');

var Home = React.createClass({
    getInitialState: function(){
        return{
            mouseX: 0,
            mouseY: 0,
            lastMove: 0
        };
    },
    HandleMouse: function(event){
//        event.preventDefault();
        if(Date.now() - this.state.lastMove > 50){
            this.setState({
            mouseX: event.clientX,
            mouseY: event.clientY,
            lastMove: Date.now()
        })
        }
    },
    render: function(){
       return(
       <div onMouseMove={(event) => this.HandleMouse(event)} className="container" >
            <a href name="top"></a>
            <Circle x={this.state.mouseX} y={this.state.mouseY}/>
            <About/>
            <Projects/>
            </div>
        )
    }
})


module.exports = Home;
