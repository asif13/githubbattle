 var React = require('react');
 var ConfrimBattle = require('../components/ConfrimBattle');

 var ConfrimBattleContainer = React.createClass({
     contextTypes:{
         router: React.PropTypes.object.isRequired
     },
     getInitialState(){
         return{
             isLoading:true,
             playerInfo:[]
         }
     }

 })