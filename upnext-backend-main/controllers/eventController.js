<<<<<<< HEAD
=======
/**
 * @swagger
 * /events:
 *   post:
 *     summary: Buat event baru dengan upload banner, dokumen, dan foto
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - category
 *               - startDate
 *               - endDate
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Seminar Teknologi"
 *               description:
 *                 type: string
 *                 example: "Seminar tentang perkembangan teknologi terbaru."
 *               category:
 *                 type: string
 *                 example: "Education"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-06-01T08:00:00Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-06-01T12:00:00Z"
 *               registLink:
 *                 type: string
 *                 format: uri
 *                 example: "https://registration.example.com"
 *               banner:
 *                 type: string
 *                 format: binary
 *                 description: Gambar banner event (png/jpg/jpeg)
 *               documents:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Dokumen pendukung event (PDF, DOC, dll)
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Foto-foto event (png/jpg/jpeg)
 *     responses:
 *       201:
 *         description: Event berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Event created successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Event'
 *       400:
 *         description: Request invalid atau gagal upload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

 /**
 * @swagger
 * /events:
 *   get:
 *     summary: Dapatkan semua event yang belum dihapus
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: Daftar event berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "All events fetched"
 *                 data:
 *                   type: object
 *                   properties:
 *                     events:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Event'
 *       500:
 *         description: Gagal mengambil data event
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
 
 /**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Dapatkan event berdasarkan ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID event
 *     responses:
 *       200:
 *         description: Event berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Event fetched successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     event:
 *                       $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

 /**
 * @swagger
 * /events/filter:
 *   get:
 *     summary: Filter event berdasarkan kategori
 *     tags: [Event]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: true
 *         description: Kategori event yang ingin difilter
 *     responses:
 *       200:
 *         description: Event berhasil difilter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Events filtered by category"
 *                 data:
 *                   type: object
 *                   properties:
 *                     events:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Event'
 *       500:
 *         description: Gagal filter event
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
*/

 /**
 * @swagger
 * /events/search:
 *   get:
 *     summary: Cari event berdasarkan judul atau deskripsi
 *     tags: [Event]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         required: true
 *         description: Kata kunci pencarian
 *     responses:
 *       200:
 *         description: Hasil pencarian event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Search results"
 *                 data:
 *                   type: object
 *                   properties:
 *                     events:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Event'
 *       500:
 *         description: Gagal pencarian event
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
*/

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Update data event termasuk update banner, dokumen, dan foto
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID event yang akan diupdate
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Seminar Teknologi Update"
 *               description:
 *                 type: string
 *                 example: "Deskripsi baru untuk event"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-06-01T10:00:00Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-06-01T14:00:00Z"
 *               registLink:
 *                 type: string
 *                 format: uri
 *                 example: "https://new-registration.example.com"
 *               banner:
 *                 type: string
 *                 format: binary
 *                 description: Gambar banner baru (png/jpg/jpeg)
 *               documents:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Dokumen baru event (PDF, DOC, dll)
 *               photos:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Foto-foto baru event (png/jpg/jpeg)
 *     responses:
 *       200:
 *         description: Event berhasil diupdate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Event updated successfully"
 *                 data:
 *                   $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       400:
 *         description: Request invalid atau gagal upload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Hapus event dan semua file terkait (soft delete)
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID event yang akan dihapus
 *     responses:
 *       200:
 *         description: Event berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Event and uploads deleted"
 *       404:
 *         description: Event tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       400:
 *         description: Gagal hapus event
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 * 
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "evt_123abc"
 *         title:
 *           type: string
 *           example: "Seminar Teknologi"
 *         description:
 *           type: string
 *           example: "Seminar tentang perkembangan teknologi terbaru."
 *         category:
 *           type: string
 *           example: "Education"
 *         startDate:
 *           type: string
 *           format: date-time
 *           example: "2025-06-01T08:00:00Z"
 *         endDate:
 *           type: string
 *           format: date-time
 *           example: "2025-06-01T12:00:00Z"
 *         registLink:
 *           type: string
 *           format: uri
 *           example: "https://registration.example.com"
 *         bannerUrl:
 *           type: string
 *           format: uri
 *           example: "https://res.cloudinary.com/your-cloud/image/upload/v123/banner.jpg"
 *         documentsUrls:
 *           type: array
 *           items:
 *             type: string
 *             format: uri
 *             example: "https://res.cloudinary.com/your-cloud/document/upload/v123/doc.pdf"
 *         photosUrls:
 *           type: array
 *           items:
 *             type: string
 *             format: uri
 *             example: "https://res.cloudinary.com/your-cloud/image/upload/v123/photo1.jpg"
 *         deleted:
 *           type: boolean
 *           example: false
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-05-22T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-05-22T10:30:00Z"
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Event not found"
 */

>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
import { PrismaClient } from '@prisma/client';
import { successResponse, errorResponse } from '../utils/responseFormatter.js';
import { streamUpload } from '../utils/cloudinary-upload.js';
import { deleteResource } from '../utils/cloudinary-delete.js';
import { nowWIB } from '../utils/time.js';

const prisma = new PrismaClient();


export const createEvent = async (req, res) => {
  try {
    const organizationId = req.user.id;
    const {
      title,
      description,
      startDate,
      endDate,
      registLink
    } = req.body;
<<<<<<< HEAD
    console.log('[createEvent] organizationId =', organizationId);
=======
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f

    // Validasi
    if (!title || !description || !startDate || !endDate || !registLink) {
      return errorResponse(
        res,
        'Title, description, startDate, endDate, and registLink are required.',
        null,
        400
      );
    }

    if (!req.files || !req.files.banner || req.files.banner.length === 0) {
      return errorResponse(res, 'Banner is required.', null, 400);
    }

    // Upload banner
    const bannerFile = req.files.banner[0];
    const uploadedBanner = await streamUpload(bannerFile.buffer, {
      folder: 'event_banners',
      resource_type: 'image',
    });

    // Upload dokumen (opsional)
    const uploadedDocuments = [];
    if (req.files.documents) {
      for (const file of req.files.documents) {
        const uploaded = await streamUpload(file.buffer, {
          folder: 'event_documents',
          resource_type: 'raw',
          use_filename: true,
          unique_filename: true,
          filename_override: file.originalname,
        });
        uploadedDocuments.push({
          url: uploaded.secure_url,
          publicId: uploaded.public_id,
        });
      }
    }

    // Upload event photos (opsional)
    const uploadedPhotos = [];
    if (req.files.photos) {
      for (const file of req.files.photos) {
        const uploaded = await streamUpload(file.buffer, {
          folder: 'event_photos',
          resource_type: 'image',
        });
        uploadedPhotos.push({
          url: uploaded.secure_url,
          publicId: uploaded.public_id,
        });
      }
    }

    // Simpan ke DB
    const event = await prisma.event.create({
      data: {
        title,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        registLink,
        organizationId,
        banner: {
          create: {
            url: uploadedBanner.secure_url,
            publicId: uploadedBanner.public_id,
          },
        },
        documents: {
          create: uploadedDocuments,
        },
        photos: {
          create: uploadedPhotos,
        },
      },
      include: {
        banner: true,
        documents: true,
        photos: true,
      },
    });

    return successResponse(res, 'Event created successfully.', { event }, 201);
  } catch (error) {
    console.error('[createEvent error]', error);
    return errorResponse(res, 'Failed to create event.', error.message, 500);
  }
};



export const getAllEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: { deletedAt: null },
      include: {
        banner: true,
        documents: true,
        photos: true,
      },
      orderBy: { startDate: 'desc' },
    });

    return successResponse(res, 'All events fetched', { events });
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Failed to fetch events', error.message);
  }
};


// ✅ Dipakai di GET /events/my
export const getEventsByUser = async (req, res) => {
  try {
<<<<<<< HEAD
    const organizationId = req.user.id;
    console.log('Organization ID (from token):', organizationId);
    const events = await prisma.event.findMany({
      where: {
        organizationId,
        deletedAt: null,
      },
      include: {
        banner: true,
        documents: true,
        photos: true,
      },
      orderBy: {
        startDate: 'desc',
      },
    });

    return successResponse(res, 'Events fetched successfully', { events });
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Failed to fetch events', error.message);
  }
};



=======
    const userId = req.user.id;

  const events = await prisma.event.findMany({
  where: {
    organizationId: userId,
    deletedAt: null, // ⬅️ INI WAJIB AGAR EVENT YANG DIHAPUS TIDAK MUNCUL
  },
  include: {
    banner: true,
    documents: true,
    photos: true,
  },
  orderBy: {
    startDate: 'desc',
  },
});

    res.json({ status: 'success', data: { events } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil event' });
  }
};

>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        banner: true,
        documents: true,
        photos: true,
        organization: true,
      },
    });

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    return res.status(200).json({ event });
  } catch (error) {
    console.error('[getEventById error]', error);
    return res.status(500).json({ message: 'Server error' });
  }
};


export const searchEvents = async (req, res) => {
  const { q } = req.query;

  try {
    const events = await prisma.event.findMany({
      where: {
        deletedAt: null,
        OR: [
          {
            title: {
              contains: q,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: q,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        banner: true,
        documents: true,
        photos: true,
      },
      orderBy: {
        startDate: 'desc',
      },
    });

    return successResponse(res, 'Search results', { events });
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Search failed', error.message);
  }
};


export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, startDate, endDate, registLink } = req.body;

  try {
    const event = await prisma.event.findFirst({
      where: { id, deletedAt: null },
      include: {
        banner: true,
        documents: true,
        photos: true,
      },
    });

    if (!event) {
      return errorResponse(res, 'Event not found', null, 404);
    }

    const dataToUpdate = {};
    if (title) dataToUpdate.title = title;
    if (description) dataToUpdate.description = description;
    if (startDate) dataToUpdate.startDate = new Date(startDate);
    if (endDate) dataToUpdate.endDate = new Date(endDate);
    if (registLink) dataToUpdate.registLink = registLink;

    await prisma.event.update({
      where: { id },
      data: dataToUpdate,
    });

    if (req.files?.banner?.length) {
      const file = req.files.banner[0];
      const result = await streamUpload(file.buffer, {
        folder: 'event_banners',
        resource_type: 'image',
        allowed_formats: ['png', 'jpg', 'jpeg'],
      });

      if (event.banner) {
        await deleteResource(event.banner.publicId);
        await prisma.banner.update({
          where: { id: event.banner.id },
          data: {
            url: result.secure_url,
            publicId: result.public_id,
          },
        });
      } else {
        await prisma.banner.create({
          data: {
            url: result.secure_url,
            publicId: result.public_id,
            eventId: id,
          },
        });
      }
    }

    if (req.files?.documents?.length) {

      for (const doc of event.documents) {
        await deleteResource(doc.publicId, { resource_type: 'raw'})
        await prisma.document.delete({ where: { id: doc.id } })
      }
      for (const file of req.files.documents) {
        const result = await streamUpload(file.buffer, {
          folder: 'event_documents',
          resource_type: 'raw',
          use_filename: true,
          unique_filename: true,
          filename_override: file.originalname,
        });

        await prisma.document.create({
          data: {
            url: result.secure_url,
            publicId: result.public_id,
            eventId: id,
          },
        });
      }
    }

    if (req.files?.photos?.length) {
      for (const photo of event.photos) {
        await deleteResource(photo.publicId);
        await prisma.eventPhoto.delete({ where: { id: photo.id } });
      }
      for (const file of req.files.photos) {
        const result = await streamUpload(file.buffer, {
          folder: 'event_photos',
          resource_type: 'image',
        });

        await prisma.eventPhoto.create({
          data: {
            url: result.secure_url,
            publicId: result.public_id,
            eventId: id,
          },
        });
      }
    }

    return successResponse(res, 'Event updated successfully', event);
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Failed to update event', error.message);
  }
};

export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await prisma.event.findFirst({
      where: { id, deletedAt: null },
      include: {
        banner: true,
        documents: true,
        photos: true,
      },
    });

    if (!event) {
      return errorResponse(res, 'Event not found', null, 404);
    }

    if (event.banner) {
      await deleteResource(event.banner.publicId);
    }

    for (const doc of event.documents) {
      await deleteResource(doc.publicId, { resource_type: 'raw' });
    }

    for (const photo of event.photos) {
      await deleteResource(photo.publicId);
    }

    await prisma.event.update({
      where: { id },
      data: { deletedAt: nowWIB() },
    });

    return successResponse(res, 'Event and uploads deleted');
  } catch (error) {
    console.error(error);
    return errorResponse(res, 'Failed to delete event', error.message);
  }
};
<<<<<<< HEAD



=======
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
