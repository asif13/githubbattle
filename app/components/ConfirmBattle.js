var React = require('react');
var PropTypes = React.PropTypes;

function puke(Object){
    return(
        <pre>{JSON.stringify(Object,null,' ')}</pre>
    )
};
function ConfirmBattle(props) {
    return props.isLoading  === true ? <p>Loading...</p>:<p>Confirm battle : {puke(props)}</p>
};
ConfirmBattle.propTypes ={
    isLoading: PropTypes.bool.isRequired,
    playersInfo : PropTypes.array.isRequired,
    onInitiateBattle : PropTypes.func.isRequired
}
module.exports = ConfirmBattle;