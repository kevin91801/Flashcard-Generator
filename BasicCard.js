function BasicCard(Front, Back) {
	this.Front = Front;
	this.Back = Back;
	this.ShowCard = function() {
		console.log("\nFront: " + this.Front + "\nBack: " + this.Back);
	}
}

var status = new BasicCard(
	"What is a 404 status code?", "It is a status code for resource not found.");

status.ShowCard();

module.exports = BasicCard;