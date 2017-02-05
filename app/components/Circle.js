var React = require('react');
var segments = require('./svg/segments').segments;
var labels = require('./svg/labels').labels
var BasicText = require('./svgComponents/Basic')
var ToolsText = require('./svgComponents/Tools');

var Circle = React.createClass({
    getInitialState: function(){
        return{
            x: 0,
            y: 0
        }
    },
    render: function() {
        let styles={
            width: "100%",
            height: "100%", 
            strokeLinejoin: 'round',
            strokeMiterlimit: '1.41421'
        };
        var segs = segments.map(function(seg, index){
            return(
                <Segment id={seg.id} fill="rgb(0,0,0)" points={seg.path} transform={seg.transform} x={this.props.x} y={this.props.y} wait={seg.wait} key={index}/>
            )
        }.bind(this))
        return (
        <div id="circle">
        <svg width="100%" height="100%" viewBox="0 0 1280 800" version="1.1" xmlns="http://www.w3.org/2000/svg" style={styles}>
            {segs}
            <BasicText id="About" transform={labels.about.transform} x={labels.x} y={labels.y} text={labels.about.text}/>
            <BasicText id="Contact" transform={labels.contact.transform} x={labels.x} y={labels.y} text={labels.contact.text}/>
            <BasicText id="Projects" transform={labels.projects.transform} x={labels.x} y={labels.y} text={labels.projects.text}/>
            <BasicText id="Contact" transform={labels.otherWork.transform} x={labels.x} y={labels.y} text={labels.otherWork.text}/>
            <ToolsText id="Tools" transform={labels.tools.transform}  x={labels.x} y={labels.y} text={labels.tools.text}/>
        </svg>
        </div>
        );
    }
});

var Segment = React.createClass({
    getInitialState: function(){
        return{
            origFill: this.props.fill,
            lightAmt: 0,
            colorVelocity: randomRange(0.04, 0.13),
            colorReach: randomRange(8, 24),
            origTransform: this.props.transform,
            transform: this.props.transform,
            hidden: "hidden"
        }
    },
    componentWillMount: function(){
        setTimeout(function(){
            this.show();
        }.bind(this), this.props.wait)
    },
    shouldComponentUpdate: function(nextProps, nextState){
        console.log(nextProps)
        return this.move(nextProps.x, nextProps.y)
    },
    show: function(){
        this.setState({hidden: ""})
    },
    move: function(x, y){
      translate(this.state.transform, x, y);
      return true;  
    },
    render: function(){
        this.state.lightAmt += this.state.colorVelocity;
        var changeAmt = Math.sin(this.state.lightAmt) * this.state.colorReach
        var targetFill = ChangeColor(this.state.origFill, changeAmt);
        var targetTransform = this.state.transform;
        return(
            <g className={this.state.hidden} transform={targetTransform} onMouseMove={(e)=>this.move(e)}>
                <path d={this.props.points} fill={targetFill}/>
            </g>
        )
    }
})

/*helper functions*/
function randomRange(min, max){
    return min + (Math.random() * max - min);
}

function ChangeColor(col, amt){
    var colorPattern = /\(([\d]+)\,([\d]+)\,([\d]+)\)/g
    var matches = colorPattern.exec(col)
    amt = Math.floor(amt * 20)
    var r = parseInt(matches[1]) + amt 
    var g = parseInt(matches[2]) + amt
    var b = parseInt(matches[3]) + amt
    return("rgb("+ r + "," + g + "," + b + ")");
}

function translate(transform, x, y){
    console.log("New mouse position:", transform, x, y);
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function explode() {
  mouseVelocity = new Point(Math.random() * (window.innerWidth * .4), Math.random() * (window.innerHeight * .4)); // base the initial mouse velocity off screensize
}

var lastMousePos = new Point(window.innerWidth * .5, window.innerHeight * .5); // assume the mouse starts at the center
var mouseVelocity;
var breakability = .9; // decimal between 0-1, closer to 1 the further polygons push away from eachother


module.exports = Circle;