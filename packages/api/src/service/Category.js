const Category = require('../models/Category');

exports.create = (data) => Category.create(data);

exports.findById = (id) => Category.findById(id);

exports.findByCategory = (category) => Category.findOne({ category });

exports.findByIdOwner = (_id, owner) => Category.findOne({ _id, owner });

exports.findByGroup = (group) => Category.findOne({ group });

exports.findAll = (...args) => Category.find(...args);

exports.update = async (_id, props) => {
	const res = await Category.updateOne({ _id }, { $set: props });
	return res;
};

exports.delete = (id) => Category.deleteOne({ _id: id });

exports.remove = async (id) => {
	const cat = await this.findById(id);
	cat.post('remove', (doc) => {
		Event.remove({ _id: { $in: doc.eventsAttended } });
	});
};
