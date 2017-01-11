 var React = require('react');
 var ConfirmBattle = require('../components/ConfirmBattle');
 var githubHelpers = require('../utils/githubHelpers'); 
 var ConfirmBattleContainer = React.createClass({
     contextTypes:{
         router: React.PropTypes.object.isRequired
     },
     getInitialState(){
         return{
             isLoading:true,
             playerInfo:[]
         }
     },
     componentDidMount(){
         var query = this.props.location.query;
         githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo]).then(function(players){
             this.setState({
                 isLoading:false,
                 playersInfo:[players[0],players[1]]
             })
         }.bind(this))
    },
    handleInitiateBattle(){
        this.context.router.push({
            pathname: '/results',
            state:{
                playerInfo: this.state.playerInfo
            }
        })
    }
    ,
     render(){
         return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle}
             />
         )
     }
 })

 module.exports = ConfirmBattleContainer;