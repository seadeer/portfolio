var React = require('react');
var Project = require('./Project')
var projects = require('./projectlist').list;

var Projects = React.createClass({
  getInitialState: function(){
    return{
      hidden: ""
    }
  },
  render: function(){
    var projs = projects.map(function(proj, index){
      return(
        <Project
          title={proj.title}
          description={proj.description}
          github={proj.github}
          link={proj.link}
          tech={proj.technologies}
          key={index}
        />
      )
    })
    return(<section>
      <div className="info-section">
        <hr/>
        <a href="#top"><span className="actions"><i className="material-icons">arrow_upward</i></span></a>
        <h4><a name="projects">Projects</a></h4>
        <div className="info-section-container">
        {projs}
        </div>
      </div>
    </section>
    )}

})

module.exports = Projects;