import { JOIN_CHANNEL } from '../utils/common/socket.event.js';

export default function messageHandlers(_io, socket) {
  socket.on(JOIN_CHANNEL, async function joinChannelHandler(data, cb) {
    const roomId = data.channelId;
    socket.join(roomId);
    console.log(`User ${socket.id} joined the channel: ${roomId}`);
    cb?.({
      success: true,
      message: 'Successfully joined the channel',
      data: roomId
    });
  });
}
