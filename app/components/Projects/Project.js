var React = require('react');
var Project = React.createClass({
  getInitialState: function(){
    return{
      hidden: ""
    }
  },
  render: function(){
    console.log(this.props);
    var technologies = this.props.tech.map(function(tech, index){
      return(
      <span className="mdl-chip" key={index}>
        <span className="mdl-chip__text">{tech}</span>
      </span>
      )  
    })
    return(
      <article className="mdl-card mdl-shadow--2dp">
        <button id={this.props.title}
          className="menu-button-right mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">more_vert</i>
          </button>
        <ul className="expand-menu mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" data-mdl-for={this.props.title}>
          <li className="mdl-menu__item">
            <a href={this.props.github}><span className="github-icon"></span></a>
          </li>
          <li className="mdl-menu__item">
            <a href={this.props.link}><span><i className="material-icons">open_in_browser</i></span></a>
          </li>
          <li className="mdl-menu__item">
            <a href="#"><span><i className="material-icons">play_arrow</i></span></a>
          </li>
        </ul>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.description}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          {technologies}
          
        </div>
      </article>
    )}
})

module.exports = Project;