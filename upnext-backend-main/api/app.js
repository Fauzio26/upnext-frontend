import express from 'express';
import cors from 'cors';
import authRoutes from '../routes/authRoutes.js';
import eventRoutes from '../routes/eventRoutes.js';
import organizationRoutes from '../routes/organizationRoutes.js';
<<<<<<< HEAD
=======
import { swaggerSpec, swaggerUi } from '../swagger.js';
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
import dotenv from 'dotenv';

dotenv.config();

const feAccess = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const app = express();


app.use(cors({
  origin: feAccess,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.use(express.json());

<<<<<<< HEAD
=======
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);
app.use('/organizations', organizationRoutes);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
