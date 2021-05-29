const mongoose = require('mongoose');

const editable = {
	createdAt: { type: Date, required: true, default: new Date().toISOString() },
	updatedAt: { type: Date, required: true, default: new Date().toISOString() },
};

const wordSchema = new mongoose.Schema({
	...editable,
	category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
	value: { type: String },
	posTag: { type: String },
	weight: { type: Number },
	saved: { type: Boolean, default: false },
});

wordSchema.pre('save', async function preSave() {
	this.updatedAt = new Date().toISOString();
});

module.exports = mongoose.model('Word', wordSchema);
