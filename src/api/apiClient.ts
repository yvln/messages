import sha1 from 'sha1';

import { IMessage } from '../types';
import messagesFixtures from './messages.fixtures.json';

const messages = messagesFixtures;

function getMessages(): Promise<IMessage[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(messages.data);
    }, 1000);
  });
}

function getUser(): Promise<{ name: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'yvln' });
    }, 300);
  });
}

function postMessage(
  message: string,
  isPrivate: boolean,
  username: string
): Promise<any> {
  messages.data.unshift({
    message,
    private: isPrivate,
    username,
    date: new Date().toString(),
    id: sha1(new Date().toString()).toString(),
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
}

export default { getMessages, getUser, postMessage };
