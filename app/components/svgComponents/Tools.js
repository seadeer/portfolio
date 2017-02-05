var React = require('react');
var Icon = require('./Icon');
var icons = require('../svg/icons').icons;

var ToolsText = React.createClass({
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
            <g>
            <g className={this.state.hidden} transform={this.props.transform}>
                <text className="label-text" x={this.props.x} y={this.props.y}>{this.props.text}</text>
            </g>
            <g transform={icons.group.transform}>
                <Icon
                    id="angular"
                    transform={icons.angular.transform}
                    paths={icons.angular.paths}
                />
                <Icon
                    id="react"
                    transform={icons.react.transform}
                    paths={icons.react.paths}/>
                <g transform={icons.react.transform}>
                    <circle cx="420.9" cy="296.5" r="45.7" fill="rgb(97,218,251)"/>
                </g>
                <Icon
                    id="kube"
                    transform={icons.kube.transform}
                    paths={icons.kube.paths}/>
                <Icon
                    id="python"
                    transform={icons.python.transform}
                    paths={icons.python.paths}/>
                />
                <Icon
                    id="node"
                    transform={icons.node.transform}
                    paths={icons.node.paths}/>
                <Icon
                    id="csharp"
                    transform={icons.csharp.transform}
                    paths={icons.csharp.paths}
                />        
            </g>
            </g>
        )
    }
})

module.exports = ToolsText;