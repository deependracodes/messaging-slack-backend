import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Sender ID is required']
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Channel',
      required: [true, 'Channel ID is required']
    },
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workspace',
      required: [true, 'Workspace ID is required']
    },
    body: {
      type: String,
      required: [true, 'Message body is required']
    },
    image: {
      type: String
    },
    // extra features can be added here
    attachments: [
      {
        url: { type: String },
        fileType: { type: String }, // e.g., 'image/png', 'application/pdf'
        originalName: { type: String },
        fileSize: { type: Number } // Size in bytes
      }
    ]
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
