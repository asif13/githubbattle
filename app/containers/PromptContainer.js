var React =  require('React'); 
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
    contextTypes:{
        router:React.PropTypes.object.isRequired
    },
    getInitialState(){
        return {
            username: ''
        }   
    },
    onUpdateUser(){
        this.setstate({
            username:e.target.value
        })
    },
    onSubmitUser(){
        e.preventDefault();
        var username = this.state.username;
        this.setstate({
            username:''
        })
        if (this.props.routeParams.playerOne){
            this.context.router.push({
                pathname:'/battle',
                query:{
                    playerOne:this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        }else{
            this.context.router.push('/playerTwo/'+this.state.username);
        }
    }
    ,
    render : function(){
        return(
        
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.onSubmitUser}>
                        <div className="from-group">
                            <input 
                                className="from-group"
                                placeholder="Github Username"
                                type="text" 
                                onChange={this.onUpdateUser}
                                value={this.state.username}
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
