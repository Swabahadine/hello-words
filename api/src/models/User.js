const mongoose = require('mongoose');

const editable = {
	createdAt: { type: Date, required: true, default: new Date().toISOString() },
	updatedAt: { type: Date, required: true, default: new Date().toISOString() },
};

const userSchema = new mongoose.Schema({
	...editable,
	uuid: { type: String },
});

userSchema.pre('save', async function preSave() {
	this.updatedAt = new Date().toISOString();
});

module.exports = mongoose.model('user', userSchema);
