const express = require('express');
const memberRouter = express.Router();
const memberController = require('./member.controller');
const { authenticate } = require('../auth/auth.middleware');


memberRouter.post('/', authenticate, memberController.addMember)
memberRouter.delete('/', authenticate, memberController.deleteMember)


module.exports = memberRouter;