// const Announcement = require('../models/Announcement');

// // Function to create a new announcement
// const createAnnouncement = async (req, res) => {
//   try {
//     const { name, category, picture, description, coordinates, userId } = req.body;
//     res.status(201).json({ message: 'Announcement created successfully', announcement: savedAnnouncement });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating announcement', error });
//   }
// };

// // Function to update an existing announcement
// const updateAnnouncement = async (req, res) => {
//   try {
//     const { announcementId } = req.params;
//     const updatedData = req.body;
//     res.status(200).json({ message: 'Announcement updated successfully', announcement: updatedAnnouncement });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating announcement', error });
//   }
// };

// // Function to delete an announcement
// const deleteAnnouncement = async (req, res) => {
//   try {
//     const { announcementId } = req.params;
//     res.status(200).json({ message: 'Announcement deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting announcement', error });
//   }
// };

// module.exports = {
//   createAnnouncement,
//   updateAnnouncement,
//   deleteAnnouncement
// };
