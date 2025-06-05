import express from 'express';
import {
  createEvent,
  getAllEvents,
  searchEvents,
  getEventById,
<<<<<<< HEAD
  getEventsByUser,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post(
  '/',
  verifyToken,
  upload.fields([
    { name: 'banner', maxCount: 1 },
    { name: 'documents', maxCount: 5 },
    { name: 'photos', maxCount: 10 },
  ]),
  createEvent
);

router.get('/my', verifyToken, getEventsByUser);
router.get('/search', searchEvents);
router.get('/', getAllEvents);
router.get('/:id', getEventById);



router.put(
  '/:id',
  verifyToken,
  upload.fields([
    { name: 'banner', maxCount: 1 },
    { name: 'documents', maxCount: 5 },
    { name: 'photos', maxCount: 10 },
  ]),
  updateEvent
);

=======
  updateEvent,
  deleteEvent,
  getEventsByUser,
} from '../controllers/eventController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { uploadEventFiles } from '../middlewares/uploadMiddleware.js'; // gunakan named export yang sesuai

const router = express.Router();

// 🔐 Protected: Create new event with file uploads (banner, documents, photos)
router.post(
  '/',
  verifyToken,
  uploadEventFiles,
  createEvent
);

// 🔐 Get events by current user (used for "My Events" page)
router.get('/my', verifyToken, getEventsByUser);

// 🔍 Search events with filters (title, category, etc.)
router.get('/search', verifyToken, searchEvents);

// 📄 Get all events (admin or dashboard usage)
router.get('/', verifyToken, getAllEvents);

// 📄 Get single event by ID
router.get('/:id', verifyToken, getEventById);

// ✏️ Update event with optional file updates
router.put(
  '/:id',
  verifyToken,
  uploadEventFiles,
  updateEvent
);

// 🗑️ Soft-delete an event
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
router.delete('/:id', verifyToken, deleteEvent);

export default router;
