// const express = require('express');
// const router = express.Router();

// // Route for creating a new announcement
// router.post('/add', async (req, res) => {
//   try {
//     const { name, category, picture, description, coordinates, userId } = req.body;
//     const announcement = new Announcement({ name, category, picture, description, coordinates, userId });
//     const savedAnnouncement = await announcement.save();
//     res.status(200).send({ message: 'Announcement created successfully', announcement: savedAnnouncement });
//   } catch (error) {
//     res.status(400).send({ message: 'Error creating announcement', error });
//   }  
// });

// // Route for retrieving all announcements
// router.get('/all', async (req, res) => {
//   try {
//     const announcements = await Announcement.find();
//     res.status(200).send({ message: 'All announcements', announcements });
//   } catch (error) {
//     res.status(400).send({ message: 'Error retrieving announcements', error });
//   }
// });

// // Route for retrieving a specific announcement by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const announcement = await Announcement.findById(req.params.id);
//     if (!announcement) {
//       res.status(404).send({ message: 'Announcement not found' });
//     } else {
//       res.status(200).send({ message: 'Announcement found', announcement });
//     }
//   } catch (error) {
//     res.status(400).send({ message: 'Error retrieving announcement', error });
//   }
// });

// // Route for updating an announcement
// router.put('/:id', async (req, res) => {
//   try {
//     const { name, category, picture, description, coordinates } = req.body;
//     const updatedAnnouncement = await Announcement.findByIdAndUpdate(req.params.id, {
//       name,
//       category,
//       picture,
//       description,
//       coordinates
//     }, { new: true });
//     if (!updatedAnnouncement) {
//       res.status(404).send({ message: 'Announcement not found' });
//     } else {
//       res.status(200).send({ message: 'Announcement updated successfully', announcement: updatedAnnouncement });
//     }
//   } catch (error) {
//     res.status(400).send({ message: 'Error updating announcement', error });
//   }
// });

// // Route for deleting an announcement
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedAnnouncement = await Announcement.findByIdAndDelete(req.params.id);
//     if (!deletedAnnouncement) {
//       res.status(404).send({ message: 'Announcement not found' });
//     } else {
//       res.status(200).send({ message: 'Announcement deleted successfully' });
//     }
//   } catch (error) {
//     res.status(400).send({ message: 'Error deleting announcement', error });
//   }
// });

// module.exports = router;
