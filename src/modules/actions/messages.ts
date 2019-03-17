import apiClient from '../../api/apiClient';
import { Dispatch, IMessage } from '../../types';

export const fetchMessages = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchMessagesRequest());
    try {
      const messages = await apiClient.getMessages();
      dispatch(fetchMessagesSuccess(messages));
    } catch (err) {
      dispatch(fetchMessagesFailure());
    }
  };
};

export const postMessage = (
  message: string,
  isPrivate: boolean,
  username: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(postMessageRequest());
    try {
      await apiClient.postMessage(message, isPrivate, username);
      dispatch(postMessagesSuccess());
    } catch (err) {
      dispatch(postMessagesFailure());
    }
  };
};

const fetchMessagesRequest = () => ({
  type: GET_MESSAGES_REQUEST,
});

const fetchMessagesFailure = () => ({
  type: GET_MESSAGES_FAILURE,
});

const fetchMessagesSuccess = (data: IMessage[]) => ({
  data,
  type: GET_MESSAGES_SUCCESS,
});

const postMessageRequest = () => ({
  type: POST_MESSAGE_REQUEST,
});

const postMessagesFailure = () => ({
  type: POST_MESSAGE_FAILURE,
});

const postMessagesSuccess = () => ({
  type: POST_MESSAGE_SUCCESS,
});

export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const POST_MESSAGE_REQUEST = 'POST_MESSAGE_REQUEST';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
