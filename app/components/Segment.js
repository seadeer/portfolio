var React = require('react');

var Segment = React.createClass({
    getInitialState: function(){
        return{
            origFill: this.props.fill,
            lightAmt: 0,
            colorVelocity: randomRange(0.04, 0.13),
            colorReach: randomRange(8, 24),
            origTransform: this.props.transform,
            transform: this.props.transform,
            hidden: "hidden",
            hover: false
        }
    },
    MouseOver: function(e){
      this.setState({
        hover: true,
        origFill: "rgb(0,0,0)"
      });
      this.props.onMouseEnter(this);
    },
    MouseLeave: function(e){
      this.setState({
        hover: false,
      })
    },
    componentWillMount: function(){
        setTimeout(function(){
            this.show();
        }.bind(this), this.props.wait)
    },
    shouldComponentUpdate: function(nextProps, nextState){
        return this.move(nextProps.x, nextProps.y) && !this.state.hover;
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
        if(!this.state.hover){
          var fill = ChangeColor(this.state.origFill, changeAmt);
        }
        var targetTransform = this.state.transform;
        return(
            <g
            onMouseEnter={(event) => this.MouseOver(event)}
            onMouseLeave={(event) => this.MouseLeave(event)}
            id={this.props.id}
            className={[this.state.hidden, "segment"].join(' ')}
            transform={targetTransform}
            onMouseMove={(e)=>this.move(e)}
            >
                <path d={this.props.points} fill={fill}/>
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
    amt = Math.floor(amt * 12)
    var c = parseInt(matches[1]) + amt
    if(c >= 250){
      c -= amt
    }
    return("rgb("+ c + "," + c + "," + c + ")");
}

function translate(transform, x, y){
    //console.log("New mouse position:", transform, x, y);
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

module.exports = Segment;