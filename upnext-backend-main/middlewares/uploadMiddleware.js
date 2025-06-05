<<<<<<< HEAD
import multer from 'multer';

const imageMimeTypes = [
  'image/jpeg', 
  'image/png', 
  'image/jpg'
];

const documentMimeTypes = [
  'application/pdf',
  'application/msword', 
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
];


const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'documents') {
    if (!documentMimeTypes.includes(file.mimetype)) {
      return cb(new Error('Only PDF and DOC/DOCX documents are allowed for documents field'), false);
    } else {
      return cb(null, true);
    }
  } else if (['banners', 'profilePic', 'membershipProof'].includes(file.fieldname)) {
    if (!imageMimeTypes.includes(file.mimetype)) {
      return cb(new Error('Only JPG, JPEG, and PNG images are allowed for image fields'), false);
    } else {
      return cb(null, true);
    }
  } else {
    return cb(null, true); 
  }
};

=======
// uploadMiddleware.js
import multer from 'multer';

const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
const documentMimeTypes = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'documents') {
    return documentMimeTypes.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error('Only PDF and DOC/DOCX allowed'), false);
  }

  if (['banner', 'eventPhotos'].includes(file.fieldname)) {
    return imageMimeTypes.includes(file.mimetype)
      ? cb(null, true)
      : cb(new Error('Only JPG, JPEG, PNG images allowed'), false);
  }

  cb(null, true); // allow other fields if needed
};
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f

const storage = multer.memoryStorage();

const upload = multer({
  storage,
<<<<<<< HEAD
  limits: { fileSize: 10 * 1024 * 1024 }, 
  fileFilter,
});

=======
  limits: { fileSize: 10 * 1024 * 1024 }, // max 10 MB per file
  fileFilter,
});

// 🟡 Export for events specifically
export const uploadEventFiles = upload.fields([
  { name: 'banner', maxCount: 1 },
  { name: 'documents', maxCount: 5 },
  { name: 'eventPhotos', maxCount: 10 },
]);

>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
export default upload;
