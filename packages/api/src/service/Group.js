const Group = require('../models/Group');

exports.create = (category, data) => Group.create({ category, size: data.length, words: data });

exports.findById = (id) => Group.findById(id);

exports.findByCategory = (category) => Group.findOne({ category });

exports.findAllCategories = () => Group.find({}, 'category');

exports.findAll = (...args) => Group.find(...args);

// exports.update = async (old, category, data) => {
// 	const props = {
// 		category,
// 		size: data.length,
// 		words: data,
// 	};
// 	await old.set(props);
// 	//await old.save();
// 	return old;
// };

exports.update = async (_id, category, data) => {
	const props = {
		category,
		size: data.length,
		words: data,
	};
	return Group.updateOne({ _id }, { $set: props });
};
