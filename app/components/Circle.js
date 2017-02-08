var React = require('react');
var segments = require('./svg/segments').segments;
var labels = require('./svg/labels').labels
var BasicText = require('./svgComponents/Basic')
var ToolsText = require('./svgComponents/Tools');
var NameTitle = require('./svgComponents/Name');
var Segment = require('./Segment');

var Circle = React.createClass({
    getInitialState: function(){
        return{
            x: 0,
            y: 0,
            hover: false,
            hidden: "hidden",
        }
    },
    HandleMouseOver: function(e){
        this.setState({
            showId: e.props.id,
        })
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
            <Segment
                id={seg.id}
                fill="rgb(0,0,0)"
                points={seg.path}
                transform={seg.transform}
                x={this.props.x}
                y={this.props.y}
                wait={seg.wait}
                key={index}
                onMouseEnter={this.HandleMouseOver}
                />
        )
    }.bind(this))
    return (
    <div id="circle" >
    <svg width="100%" height="100%" viewBox="0 0 1150 800" version="1.1" xmlns="http://www.w3.org/2000/svg" style={styles}>
        {segs}
        <a href="#about"><BasicText id="About" transform={labels.about.transform} x={labels.x} y={labels.y} text={labels.about.text} show={this.state.showId}/></a>
        <BasicText id="Contact" transform={labels.contact.transform} x={labels.x} y={labels.y} text={labels.contact.text} show={this.state.showId}/>
        <a href="#projects"><BasicText id="Projects" transform={labels.projects.transform} x={labels.x} y={labels.y} text={labels.projects.text} show={this.state.showId}/></a>
        <BasicText id="Other" transform={labels.otherWork.transform} x={labels.x} y={labels.y} text={labels.otherWork.text} show={this.state.showId}/>
        <ToolsText id="Tools" transform={labels.tools.transform}  x={labels.x} y={labels.y} text={labels.tools.text} show={this.state.showId}/>
        <NameTitle show={this.state.showId}/>
    </svg>
    </div>
    );
    }
});

module.exports = Circle;