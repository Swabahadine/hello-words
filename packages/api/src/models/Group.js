const mongoose = require('mongoose');

const editable = {
	createdAt: { type: Date, required: true, default: new Date().toISOString() },
	updatedAt: { type: Date, required: true, default: new Date().toISOString() },
};

const wordsShema = {
	name: { type: String, required: true },
	weight: { type: Number, required: true },
};
const groupSchema = new mongoose.Schema({
	...editable,
	category: { type: String, required: true },
	size: { type: Number, required: true },
	words: [wordsShema],
});

groupSchema.pre('save', async function preSave() {
	this.updatedAt = new Date().toISOString();
});

module.exports = mongoose.model('Group', groupSchema);
