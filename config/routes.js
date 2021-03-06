var router = require('express').Router();
var criminalsController = require('../controllers/criminals');
var cloudvisionController = require("../controllers/cloudvision");



/// Cloud Vision Test Get
router.route('/api/cloudvision')
  .put(cloudvisionController.visionGet);


// http://127.0.0.1:3000/criminals
router.route('/criminals')

  //GET all criminals
  .get(criminalsController.getAll)

  //POST a new blob
  .post(criminalsController.createCriminal);


router.route('/criminals/:id')

  // GET return specific candy
  .get(criminalsController.getCriminal)

  // PATCH update existing candy
  .patch(criminalsController.updateCriminal)

  // DELETE remove specific candy from DB
  .delete(criminalsController.removeCriminal);


module.exports = router