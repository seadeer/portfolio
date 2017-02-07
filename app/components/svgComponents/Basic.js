var React = require('react');
var BasicText = React.createClass({
    propTypes:{
        text: React.PropTypes.string.isRequired,
        x: React.PropTypes.string.isRequired,
        y: React.PropTypes.string.isRequired,
        transform: React.PropTypes.string.isRequired
    },
    getInitialState: function(){
        return{hidden: "hidden"}
    },
    shouldComponentUpdate: function(nextProps, nextState){
        if (nextProps.show == "seg1" && this.props.id == "About"){
            this.state.hidden=""
            return true;
        }
        else if(nextProps.show == "seg3" && this.props.id == "Projects"){
            this.state.hidden=""
            return true;
        }
        else if(nextProps.show == "seg4" && this.props.id == "Contact"){
            this.state.hidden=""
            return true;
        }
        else if(nextProps.show == "seg5" && this.props.id == "Other"){
            this.state.hidden=""
            return true;
        }
        else{
            return false;
        }
    },
    render: function(){
        
        return(
            <g className={["fadein", this.state.hidden].join(' ')} transform={this.props.transform}>
                <text className="label-text" x={this.props.x} y={this.props.y}>{this.props.text}</text>
            </g>
        )
    }
})

module.exports = BasicText;