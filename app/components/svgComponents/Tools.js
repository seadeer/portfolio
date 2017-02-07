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
    getInitialState: function(){
        return{hidden: "hidden"}
    },
    shouldComponentUpdate: function(nextProps, nextState){
        if(this.props.show == "seg6"){
            this.state.hidden = ""
            return true;
        }
        return false;
    },
    render: function(){
        return(
            <g>
            <g className={["fadein", this.state.hidden].join(' ')} transform={this.props.transform}>
                <text className="label-text" x={this.props.x} y={this.props.y}>{this.props.text}</text>
            </g>
            <g transform={icons.group.transform}>
                <Icon hidden={this.state.hidden}
                    id="angular"
                    transform={icons.angular.transform}
                    paths={icons.angular.paths}
                    wait={700}
                />
                <Icon hidden={this.state.hidden}
                    id="react"
                    transform={icons.react.transform}
                    paths={icons.react.paths}
                    wait={250}/>
                <g className={["fadein", this.state.hidden].join(' ')} transform={icons.react.transform}>
                    <circle cx="420.9" cy="296.5" r="45.7" fill="rgb(97,218,251)"/>
                </g>
                <Icon hidden={this.state.hidden}
                    id="kube"
                    transform={icons.kube.transform}
                    paths={icons.kube.paths}
                    wait={100}/>
                <Icon hidden={this.state.hidden}
                    id="python"
                    transform={icons.python.transform}
                    paths={icons.python.paths}
                    wait={850}
                    />
                />
                <Icon hidden={this.state.hidden}
                    id="node"
                    transform={icons.node.transform}
                    paths={icons.node.paths}
                    wait={400}
                    />
                <Icon hidden={this.state.hidden}
                    id="csharp"
                    transform={icons.csharp.transform}
                    paths={icons.csharp.paths}
                    wait={550}
                />        
            </g>
            </g>
        )
    }
})

module.exports = ToolsText;