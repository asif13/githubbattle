var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Link = require('react-router').Link;

var Home = React.createClass({
    render : function(){
        return (
           <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
                <h1>Github Battle</h1>
                <p className='lead'>Metal,till i die</p>
                <Link to='/playerOne' >
                    <button type='button' className='btn-lg btn-success'>Get Started</button>
                </Link>
           </div>
        )
    }
});

module.exports = Home;