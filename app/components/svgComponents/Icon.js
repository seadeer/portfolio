var React = require('react');
var Icon = React.createClass({
  propTypes:{
      transform: React.PropTypes.string.isRequired,
      paths: React.PropTypes.array.isRequired
  },
  getInitialState:function(){
      return{hidden: ""}
  },
  render: function(){
      var pathArr = this.props.paths.map(function(path, index){
      return(
          <path d={path.path} key={index} fill={path.fill}/>
      )
      })
      return(
          <g transform={this.props.transform}>
            {pathArr}
          </g>
      )
  }  
})

module.exports = Icon;