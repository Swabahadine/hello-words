const mongoose = require('mongoose');

const editable = {
	createdAt: { type: Date, required: true, default: new Date().toISOString() },
	updatedAt: { type: Date, required: true, default: new Date().toISOString() },
};

const groupSchema = new mongoose.Schema({
	...editable,
	category: { type: String, required: true },
	words: {},
});

groupSchema.pre('save', async function preSave() {
	this.updatedAt = new Date().toISOString();
});

module.exports = mongoose.model('Group', groupSchema);
