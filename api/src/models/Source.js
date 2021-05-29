const mongoose = require('mongoose');

const editable = {
	createdAt: { type: Date, required: true, default: new Date().toISOString() },
	updatedAt: { type: Date, required: true, default: new Date().toISOString() },
};

const sourceSchema = new mongoose.Schema({
	...editable,
	owner: { type: String },
	category: { type: String, required: true },
	urls: [{ type: String }],
	text: { type: String },
});

sourceSchema.pre('save', async function preSave() {
	this.updatedAt = new Date().toISOString();
});

module.exports = mongoose.model('Source', sourceSchema);
