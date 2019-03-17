import apiClient from '../../api/apiClient';
import { Dispatch } from '../../types';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getUserRequest());
    try {
      const user = await apiClient.getUser();
      dispatch(getUserSuccessRequest(user.name));
    } catch (err) {
      dispatch(getUserFailureRequest());
    }
  };
};

const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

const getUserFailureRequest = () => ({
  type: GET_USER_FAILURE,
});

const getUserSuccessRequest = (data: string) => ({
  data,
  type: GET_USER_SUCCESS,
});
