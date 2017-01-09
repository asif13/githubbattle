var React =  require('React'); 
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
    componentWillMount(){
        console.log('PromptContainer called');
    },
    render : function(){
        return(
        
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form>
                        <div className="from-group">
                            <input 
                                className="from-group"
                                placeholder="Github Username"
                                type="text" 
                            />
                            </div>
                            <div
                             className="from-group col-sm-4 col-sm-offset-4">
                                <button 
                                    className='btn-sm btn-success'
                                    type="submit"
                                    >
                                    Continue
                                    </button>
                             </div>
                        </form>
                </div>
            </div>
        )
    }
});

module.exports = PromptContainer;
