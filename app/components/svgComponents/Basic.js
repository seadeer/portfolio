var React = require('react');
var BasicText = React.createClass({
    propTypes:{
        text: React.PropTypes.string.isRequired,
        x: React.PropTypes.string.isRequired,
        y: React.PropTypes.string.isRequired,
        transform: React.PropTypes.string.isRequired
    },
    getInitialState:function(){
        return{hidden: ""}
    },
    render: function(){
        
        return(
            <g className={this.state.hidden} transform={this.props.transform}>
                <text className="label-text" x={this.props.x} y={this.props.y}>{this.props.text}</text>
            </g>
        )
    }
})

module.exports = BasicText;