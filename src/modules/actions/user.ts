
import { Dispatch, IMessage, } from '../../types';
import apiClient from '../../api/apiClient';

export const GET_USERNAME = 'GET_USERNAME';
export const GET_USERNAME_FAILURE = 'GET_USERNAME_FAILURE';
export const GET_USERNAME_SUCCESS = 'GET_USERNAME_SUCCESS';

export const getUsername = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getUsernameRequest());
    try {
      const user = await apiClient.getUser();
      dispatch(getUsernameSuccessRequest(user.name));
    } catch (err) {
      dispatch(getUsernameFailureRequest());
    }
  };
};

const getUsernameRequest = () => ({
  type: GET_USERNAME,
});

const getUsernameFailureRequest = () => ({
  type: GET_USERNAME_FAILURE,
});

const getUsernameSuccessRequest = (data: string) => ({
  data,
  type: GET_USERNAME_SUCCESS,
});
