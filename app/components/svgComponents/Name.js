var React = require('react');
var labels = require('../svg/labels').labels
var Name = React.createClass({
    propTypes:{
    },
    getInitialState:function(){
        return{hidden: "hidden"}
    },
    shouldComponentUpdate: function(nextProps, nextState){
        if(this.props.show == "seg2"){
            this.state.hidden = ""
            return true;
        }
        return false;
    },
    render: function(){
        return(
            <g id="name" className={["fadein", this.state.hidden].join(' ')}>
                <g transform={labels.name.transform}>
                <text className="label-text" x={labels.x} y={labels.y}>{labels.name.text}</text>
                </g>
                <g transform={labels.title.transform}>
                    <text className="label-text" x="970.055px" y="215.775px">{labels.title.text}</text> 
                </g>
            </g>
        )
    }
})

module.exports = Name;