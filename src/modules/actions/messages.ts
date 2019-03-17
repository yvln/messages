import { Dispatch, IMessage } from '../../types';
import apiClient from '../../api/apiClient';

export const fetchMessages = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchMessagesRequest());
    try {
      const messages = await apiClient.getMessages();
      dispatch(fetchMessagesSuccessRequest(messages));
    } catch (err) {
      dispatch(fetchMessagesFailureRequest());
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
      dispatch(postMessagesSuccessRequest());
    } catch (err) {
      dispatch(postMessagesFailureRequest());
    }
  };
};

const fetchMessagesRequest = () => ({
  type: GET_MESSAGES,
});

const fetchMessagesFailureRequest = () => ({
  type: GET_MESSAGES_FAILURE,
});

const fetchMessagesSuccessRequest = (data: IMessage[]) => ({
  data,
  type: GET_MESSAGES_SUCCESS,
});

const postMessageRequest = () => ({
  type: POST_MESSAGE,
});

const postMessagesFailureRequest = () => ({
  type: POST_MESSAGE_FAILURE,
});

const postMessagesSuccessRequest = () => ({
  type: POST_MESSAGE_SUCCESS,
});

export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_MESSAGES_FAILURE = 'GET_MESSAGES_FAILURE';
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';
export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';