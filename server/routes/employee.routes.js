const express = require('express');
const router = express.Router();
const employeeCtrl = require('../controllers/employee.controller');

router.get('/',employeeCtrl.getEmployees);
router.post('/',employeeCtrl.insert);
router.get('/:id',employeeCtrl.findById);
router.put('/:id', employeeCtrl.update);
router.delete('/:id', employeeCtrl.delete);

module.exports = router;