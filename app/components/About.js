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
        <div className="section-text">
        <h4><a name="about">About me</a></h4>
        <p>I am a software developer coming from a linguistics research background. I started seriously coding about a year ago and became increasingly engrossed in programming as an outlet of my passion for learning, building things, solving problems, and experimenting. As as a linguist, I studied languages of two minority ethnic groups, Aleut and Nanai. There are very few print materials in these languages. By gathering scraps of information from texts that were available and from free-form interviews with the remaining speakers I gained insights into the inner workings of these languages. Now I apply the same process of deconstruction and synthesis to writing software.</p>
        </div>
        <a href="#top"><span className="actions"><i className="material-icons">arrow_upward</i></span></a>
      </div>
      
    </section>
    )}

})

module.exports = About;