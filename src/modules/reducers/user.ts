import { IAction, IUserState } from '../../types';
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from '../actions';

const initialState: IUserState = {
  get: {
    isFailure: false,
    isPending: false,
    isSuccess: false,
  },
  name: '',
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        get: {
          isFailure: false,
          isPending: true,
          isSuccess: false,
        },
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        get: {
          isFailure: true,
          isPending: false,
          isSuccess: false,
        },
      };
    case GET_USER_SUCCESS:
      return {
        name: action.data,
        get: {
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
