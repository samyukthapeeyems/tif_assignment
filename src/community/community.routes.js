const express = require('express');
const communityRouter = express.Router();
const communityController = require('./community.controller');
const { authenticate } = require('../auth/auth.middleware');



communityRouter.post('/', authenticate, communityController.createCommunity)
communityRouter.get('/', authenticate, communityController.getAllCommunities)
communityRouter.get('/', authenticate, communityController.getAllMembers)
communityRouter.get('/', authenticate, communityController.getMyOwnedCommunity)
communityRouter.get('/', authenticate, communityController.getMyJoinedCommunity)


module.exports = communityRouter;