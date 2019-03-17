import {
  GET_USERNAME,
  GET_USERNAME_FAILURE,
  GET_USERNAME_SUCCESS,
} from '../actions';
import { IAction, IUserState } from '../../types';

const initialState: IUserState = {
  fetch: {
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
        fetch: {
          isFailure: false,
          isPending: true,
          isSuccess: false,
        },
      };
    case GET_USERNAME_FAILURE:
      return {
        ...state,
        fetch: {
          isFailure: true,
          isPending: false,
          isSuccess: false,
        },
      };
    case GET_USERNAME_SUCCESS:
      return {
        name: action.data,
        fetch: {
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
