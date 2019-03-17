export interface IAction {
  type: string;
  data?: any;
}

export interface IMessage {
  username: string;
  date: string;
  message: string;
  id: string;
  private: boolean;
}

export interface IMessagesState {
  list: IMessage[];
  fetch: {
    isFailure: boolean;
    isPending: boolean;
    isSuccess: boolean;
  },
  post: {
    isFailure: boolean;
    isPending: boolean;
    isSuccess: boolean;
  },
}

export type IUserState = {
  name: string;
  fetch: {
    isFailure: boolean;
    isPending: boolean;
    isSuccess: boolean;
  },
}

export interface IFullState {
  messages: IMessagesState
  user: IUserState;
}

export type Dispatch = Function;