const express = require('express');
const router = express.Router();

const {
    login, 
    register,
    getProfile,
    logout,
    getUserInfor,
    getUsersAllInfor,
    updateUser,
    updateUsersRole,
    deleteUser
} = require('../../controller/user-controller/UserController');
const {auth} = require('../../middleware/auth');
const authAdmin = require('../../middleware/authAdmin');

router.post('/register', register);
router.post('/login', login);

router.get('/profile', getProfile);
router.get('/info', getUserInfor);
router.get('/user_info', auth, authAdmin, getUsersAllInfor);

router.put('/update', auth, updateUser);
router.put('/update_role/:id', auth, authAdmin, updateUsersRole);

router.delete('/admin/delete/:id', auth, authAdmin, deleteUser);

module.exports = router;