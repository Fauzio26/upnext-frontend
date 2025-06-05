import express from 'express';
import {
  getProfile,
  updateProfile,
  getAllOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
} from '../controllers/organizationController.js';

import { verifyToken } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

<<<<<<< HEAD
=======

>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
router.get('/me', verifyToken, getProfile);

router.put(
  '/me',
  verifyToken,
  upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'bannerPic', maxCount: 1 }
  ]),
  updateProfile
);

<<<<<<< HEAD
=======

>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
router.get('/', getAllOrganizations); 
router.get('/:id', getOrganizationById); 

router.put(
  '/:id',
<<<<<<< HEAD
  verifyToken,
  updateOrganization
);

router.delete(
  '/:id',
  verifyToken,
  deleteOrganization
); 
=======
  upload.single('membershipProof'), 
  updateOrganization
);

router.delete('/:id', deleteOrganization); 
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f

export default router;
