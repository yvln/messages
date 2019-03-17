import { IAction, IUserState } from '../../types';
import {
  GET_USERNAME,
  GET_USERNAME_FAILURE,
  GET_USERNAME_SUCCESS,
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
    case GET_USERNAME:
      return {
        ...state,
        get: {
          isFailure: false,
          isPending: true,
          isSuccess: false,
        },
      };
    case GET_USERNAME_FAILURE:
      return {
        ...state,
        get: {
          isFailure: true,
          isPending: false,
          isSuccess: false,
        },
      };
    case GET_USERNAME_SUCCESS:
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
