console.log("-----------------------------------")
console.log("|       Daily Dose of Death       |")
console.log("-----------------------------------")

const Twit = require('twit')
const config = require('./api/config')
const tags = require('./lib/dayTags')
const Data = require('./lib/data/death')

const T = new Twit(config);

//driver code 

SetTi()
setInterval(SetTi, 86400000)
function SetTi() {
    var data
    let random = Math.floor((Math.random() * Data.length) + 1)
    data = Data[random]

    var tweet = {
        status: '" ' + data.quoteText + ' "' + ' \ ' + tags + " #dailyDoseOfDeath"
    }

    T.post('statuses/update', tweet, twDone)
    function twDone(err, data, response) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Tweet Success")
        }
    }
}
