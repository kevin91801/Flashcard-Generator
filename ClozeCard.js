function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = "..." + partial;
	this.full = cloze + " " + partial;
};

module.exports = ClozeCard;