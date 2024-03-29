import { IAction, IMessagesState } from '../../types';
import {
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  POST_MESSAGE_FAILURE,
  POST_MESSAGE_REQUEST,
  POST_MESSAGE_SUCCESS,
} from '../actions/messages';

const initialState: IMessagesState = {
  list: [],
  get: {
    isFailure: false,
    isPending: false,
    isSuccess: false,
  },
  post: {
    isFailure: false,
    isPending: false,
    isSuccess: false,
  },
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return {
        ...state,
        get: {
          isFailure: false,
          isPending: true,
          isSuccess: false,
        },
      };
    case GET_MESSAGES_FAILURE:
      return {
        ...state,
        get: {
          isFailure: true,
          isPending: false,
          isSuccess: false,
        },
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        list: action.data,
        get: {
          isFailure: false,
          isPending: false,
          isSuccess: true,
        },
      };
    case POST_MESSAGE_REQUEST:
      return {
        ...state,
        post: {
          isFailure: false,
          isPending: true,
          isSuccess: false,
        },
      };
    case POST_MESSAGE_FAILURE:
      return {
        ...state,
        post: {
          isFailure: true,
          isPending: false,
          isSuccess: false,
        },
      };
    case POST_MESSAGE_SUCCESS:
      return {
        ...state,
        post: {
          isFailure: false,
          isPending: false,
          isSuccess: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
