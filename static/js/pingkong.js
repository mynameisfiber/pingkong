//
//  Requires:
//      jquery
//

function leaderboard(callback, limit) {
    var limit = limit || 10;
    jQuery.getJSON('/api/leaderboard', function(data) {
        var items = [];
        
        jQuery.each(data.scores, function(key, val) {
            items.push({user:val[0], score:val[1]});
        });

        callback(items);
    });
}

var recordMatchUrlTemplate = new Template("/api/record_match/#{playera.name}:#{playerb.name}/#{playera.score}:#{playerb.score}");
function recordMatch(playera, playerb, callback) {
    var limit = limit || 10;
    var url = recordMatchUrlTemplate.evaluate({playera:playera, playerb:playerb});
    jQuery.getJSON(url, function(data) {
        callback(data);
    });
}

var recordMatchUrlTemplate = new Template("/api/predict_match/#{playera.name}:#{playerb.name}");
function predictMatch(playera, playerb, callback) {
    var url = predictMatchUrlTemplate.evaluate({playera:playera, playerb:playerb})
    jQuery.getJSON(url, function(data) {
        callback(data);
    });
}

function getAllUsers(playera, playerb, callback) {
    var url = predictMatchUrlTemplate.evaluate({playera:playera, playerb:playerb})
    jQuery.getJSON(url, function(data) {
        callback(data);
    });
}