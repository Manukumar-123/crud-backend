import express from 'express';
const router = express.Router();
import { addUser, getUser, getUserById, editUser, deleteUser} from '../controller/user-controller.js';

router.post('/add',addUser);
router.get('/all',getUser); 
router.get('/:id',getUserById);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);


export default router; 