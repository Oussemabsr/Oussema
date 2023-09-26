const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
