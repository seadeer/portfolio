var React = require('react');
var Icon = React.createClass({
  propTypes:{
      transform: React.PropTypes.string.isRequired,
      paths: React.PropTypes.array.isRequired
  },
  getInitialState:function(){
      return{hidden: "hidden"}
  },
  shouldComponentUpdate: function(nextProps, nextState){
      if(nextProps.hidden == ""){
          setTimeout(function(){
            this.setState({hidden: ""})
        }.bind(this), this.props.wait)
        return true;
      }
      return false;
  },
  render: function(){
      var pathArr = this.props.paths.map(function(path, index){
      return(
          <path d={path.path} key={index} fill={path.fill}/>
      )
      })
      return(
          <g className={["fadein", this.state.hidden].join(' ')} transform={this.props.transform}>
            {pathArr}
          </g>
      )
  }  
})

module.exports = Icon;