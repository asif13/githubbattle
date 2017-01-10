var axios = require('axios');
var id = "";
var sec = "";
var param = "?client_id"+id+"&client_secret="+sec;
function getuserInfo(username){
    return axios.get('https://api.github.com/users/'+username)
}
var helpers = {
    getPlayersInfo: function(players){
        return axios.all(players.map(function(username){
            return getuserInfo(username);
        })).then(function(info){
             console.log(info);
        })
    }
};

module.exports = helpers;