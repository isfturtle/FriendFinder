var friendsArray=require("../data/friends");

module.exports = function(app){

app.get("/api/friends", function(req, res){
	res.json(friendsArray);
});

app.post("/api/friends", function(req, res){
	newFriend = req.body;
	if(friendsArray.length===0){
		friendsArray.push(newFriend);
	}
	else{
		var bestMatch = null;
		var bestMatchScore = 50;
		for(var i = 0; i<friendsArray.length;i++){
			var matchScore = 0;
			for(var j=0; j<10;j++){
				matchScore+=Math.abs(friendsArray[i].score[j]-newFriend.score[j]);
			}
			if(matchScore<bestMatchScore){
				bestMatch=friendsArray[i];
				bestMatchScore=matchScore;
			}
		}
		res.json(bestMatch);
	}
});


}