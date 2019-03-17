import sha1 from 'sha1';

import { IMessage } from '../types';
import messagesFixtures from './messages.fixtures.json';

// FAKE API, returns fake data with a delay

const messages = messagesFixtures;
const apiResponseDelay = 700;

// set sendErrors to `true` if you want to test errors handling
const sendErrors = false;

function getMessages(): Promise<IMessage[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!sendErrors) {
        resolve(messages.data);
      } else {
        reject('Unable to fetch messages');
      }
    }, apiResponseDelay);
  });
}

function getUser(): Promise<{ name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'yvln' });
    }, apiResponseDelay);
  });
}

function postMessage(
  message: string,
  isPrivate: boolean,
  username: string
): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!sendErrors) {
        // Add the new data at the beginning so it is sorted by date
        messages.data.unshift({
          message,
          private: isPrivate,
          username,
          date: new Date().toString(),
          // use sha1 to get a unique hash per message
          id: sha1(`${new Date().toString()}-${username}`).toString(),
        });
        resolve('success');
      } else {
        reject('Unable to post the message');
      }
    }, apiResponseDelay);
  });
}

export default { getMessages, getUser, postMessage };
