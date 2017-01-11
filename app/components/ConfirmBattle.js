var React = require('react');

function puke(Object){
    return(
        <pre>{JSON.stringify(Object,null,' ')}</pre>
    )
};
function ConfirmBattle(props) {
    return props.isLoading  === true ? <p>Loading...</p>:<p>Confirm battle : {puke(props)}</p>
};

module.exports = ConfirmBattle;