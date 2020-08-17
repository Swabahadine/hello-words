const Source = require('../models/Source');

exports.create = (data, group, infos) => Source.create({ ...data, group, infos });

exports.findById = (id) => Source.findById(id);

exports.findByCategory = (category) => Source.findOne({ category });

exports.findByGroup = (group) => Source.findOne({ group });

exports.findAll = (...args) => Source.find(...args);

exports.update = async (old, data, group, infos) => {
	const props = {
		...data,
		group,
		infos,
	};
	await old.set(props);
	// await old.save();
	return old;
};

exports.update = async (_id, data, infos) => {
	const props = {
		...data,
		infos,
	};
	const res = await Source.updateOne({ _id }, { $set: props });
	return res;
};

exports.delete = (id) => Source.deleteOne({ _id: id });
