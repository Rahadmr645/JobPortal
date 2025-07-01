import express from 'express';
import { deleteUser, getAllUsers } from '../controllers/adminController.js';

const router = express.Router();

router.get('/users', getAllUsers);

router.delete('/user/delete/:id', deleteUser);

export default router;