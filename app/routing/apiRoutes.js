// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var userData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.post("/api/survey", function(req, res) {
        // Our "server" will respond to a form submission and find out the closest match.
        console.log(req.body);

        var resultArray = [];
        for (var q = 0; q < userData.length; q++) {
            var a = req.body.scores;
            console.log("original a is " + a);
            for (var i = 0; i < a.length; i++)
                a[i] = parseInt(a[i]);
            console.log("new a is " + a);
            var b = userData[q].scores;
            console.log("old b is " + b);
            for (var i = 0; i < b.length; i++)
                b[i] = parseInt(b[i]);
            console.log("new b is " + b);
            var diff = 0;
            for (var j = 0; j <= 9; j++) {
                console.log(Math.abs(a[j] - b[j]));
                diff = diff + (Math.abs(a[j] - b[j]));
            }

            console.log("diff with user " + q + " is : " + diff);
            resultArray.push(diff);
        }
        console.log(resultArray);
        Array.min = function(array) {
            return Math.min.apply(Math, array);
        };

        var minimum = Array.min(resultArray);
        var a = resultArray.indexOf(minimum);
        console.log(a, userData[a].name + " is the best match");
        userData.push(req.body);
    });
    

};
