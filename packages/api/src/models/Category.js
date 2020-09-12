const mongoose = require('mongoose');

const editable = {
	createdAt: { type: Date, required: true, default: new Date().toISOString() },
	updatedAt: { type: Date, required: true, default: new Date().toISOString() },
};

const categorySchema = new mongoose.Schema({
	...editable,
	owner: { type: String },
	category: { type: String, required: true },
	group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
	sources: { type: mongoose.Schema.Types.ObjectId, ref: 'Source' },
	infos: {
		textSize: { type: Number },
		diffWords: { type: Number },
		diffTags: { type: Number },
	},
});

categorySchema.pre('save', async function preSave() {
	this.updatedAt = new Date().toISOString();
});

module.exports = mongoose.model('Category', categorySchema);
