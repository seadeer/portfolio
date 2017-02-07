var React = require('react');
var Project = React.createClass({
  getInitialState: function(){
    return{
      hidden: ""
    }
  },
  render: function(){
    return(
      <article className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Welcome</h2>
        </div>
        <div className="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          Get Started
          </a>
        </div>
      </article>
    )}
})

module.exports = Project;