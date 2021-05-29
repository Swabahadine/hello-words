const Source = require('../models/Source');

exports.create = (data) => Source.create(data);

exports.findById = (id) => Source.findById(id);

exports.findByCategory = (category) => Source.findOne({ category });

exports.findByGroup = (group) => Source.findOne({ group });

exports.findAll = (...args) => Source.find(...args);

exports.update = async (_id, props) => {
	const res = await Source.updateOne({ _id }, { $set: props });
	return res;
};

exports.delete = (id) => Source.deleteOne({ _id: id });
