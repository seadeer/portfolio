var React = require('react');
var Project = require('./Project')

var Projects = React.createClass({
  getInitialState: function(){
    return{
      hidden: ""
    }
  },
  render: function(){
    return(<section>
      <div className="info-section">
        <hr/>
        <h4>Projects</h4>
        <div className="info-section-container">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        </div>
      </div>
    </section>
    )}

})

module.exports = Projects;