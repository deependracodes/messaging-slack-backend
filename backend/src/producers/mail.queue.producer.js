import '../consumers/mail.queue.consumer.js';

import mailQueue from '../queues/mail.queue.js';

export const addEmailtoMailQueue = async (emailData) => {
  console.log('initiating email sending process');
  try {
    await mailQueue.add(emailData);
    console.log('Email added to mail queue');
  } catch (error) {
    console.log('Add email to mail queue error', error);
  }
};
