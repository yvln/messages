import sha1 from 'sha1';

import { IMessage } from '../types';
import messagesFixtures from './messages.fixtures.json';

const messages = messagesFixtures;
const apiResponseDelay = 700;

// FAKE API, returns fake data with a delay

function getMessages(): Promise<IMessage[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messages.data);
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
  // Add the new data at the beginning so it is sorted by date
  messages.data.unshift({
    message,
    private: isPrivate,
    username,
    date: new Date().toString(),
    // use sha1 to get a unique hash per message
    id: sha1(`${new Date().toString()}-${username}`).toString(),
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, apiResponseDelay);
  });
}

export default { getMessages, getUser, postMessage };
