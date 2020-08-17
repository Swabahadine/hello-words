const Source = require('../models/Source');

exports.create = (data, group, infos) => Source.create({ ...data, group, infos });

exports.findByCategory = (category) => Source.findOne({ category });

exports.findByGroup = (group) => Source.findOne({ group });

exports.findAll = (...args) => Source.find(...args);
