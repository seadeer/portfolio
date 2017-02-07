var React = require('react');
var About = React.createClass({
  getInitialState: function(){
    return{
      hidden: ""
    }
  },
  render: function(){
    return(<section>
      <div className="info-section">
        <hr/>
        <h4>About</h4>
        <p>I am a software developer with background in linguistics research. </p>
      </div>
    </section>
    )}

})

module.exports = About;