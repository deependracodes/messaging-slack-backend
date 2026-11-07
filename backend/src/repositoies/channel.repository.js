import Channel from '../models/channel.model.js';
import crudRepository from './crud.repository.js';

const channelRepository = {
  ...crudRepository(Channel),
  
  getChannelWithWorkspaceDetails: async function (channelId) {
    const channel = await Channel.findById(channelId).populate('workspaceId');
    return channel;
  }
};

export default channelRepository;
