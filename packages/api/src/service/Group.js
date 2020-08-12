const Group = require('../models/Group');

exports.create = (category, data) => Group.create({ category, size: data.length, words: data });

exports.findByCategory = (category) => Group.findOne({ category });

exports.findAll = (...args) => Group.find(...args);
