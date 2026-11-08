import Message from '../models/message.model.js';
import crudRepository from './crud.repository.js';

const messageRepository = {
  ...crudRepository(Message),

  // if considered page starts from 1 skip((page - 1) * limit) ,if page starts from 0 skip(page*limit) both logic is same
  getPaginatedMessages: async (messageParams, page = 1, limit = 20) => {
    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, parseInt(limit, 10) || 20);
    const skip = (pageNum - 1) * limitNum;

    const [totalDocs, messages] = await Promise.all([
      Message.countDocuments(messageParams),
      Message.find(messageParams)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limitNum)
        .populate('senderId', 'username email avatar')
        .lean() // improves query performance by returning plain JavaScript objects instead of full Mongoose documents
    ]);

    const totalPages = Math.ceil(totalDocs / limitNum) || 1;

    return {
      docs: messages,
      totalDocs,
      totalPages,
      limit: limitNum,
      currentPage: pageNum,
      hasNextPage: pageNum < totalPages,
      hasPrevPage: pageNum > 1
    };
  },

  getMessageDetails: async (messageId) => {
    const message = await Message.findById(messageId).populate(
      'senderId',
      'username email avatar'
    );
    return message;
  }
};

export default messageRepository;
