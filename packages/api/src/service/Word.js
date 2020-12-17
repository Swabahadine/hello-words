const Word = require('../models/Word');

exports.create = (data) => Word.create(data);

exports.insertMany = (arr) => Word.insertMany(arr);

exports.findById = (id) => Word.findById(id);

exports.findByCategory = (category) => Word.find({ category });

exports.findAll = (...args) => Word.find(...args);

exports.saveWord = async (_id, tag, word) => {
	return Word.updateOne({ _id }, {
		$set: { words: { [tag]: { [word]: { saved: true } } } },
	});
};

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

exports.update = async (_id, props) => Word.updateOne({ _id }, { $set: props });

exports.delete = (id) => Word.deleteOne({ _id: id });
