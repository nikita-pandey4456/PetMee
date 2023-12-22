const express = require('express');

const {getAllUsers} = require("../controllers/petLoverController");

const router = express.Router();
 
router.route("/users").get(getAllUsers);

module.exports = router;
/*
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser

} //= require('../controllers/users')

= require('../controllers/petLoverController');

const router = express.Router();

router
 .route("/users")
 .get(getUsers)
 .post(createUser);

router
 .route('/:id')
 .get(getUser)
 .put(updateUser)
 .delete(deleteUser);

module.exports = router;


*/