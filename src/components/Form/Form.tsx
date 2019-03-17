import * as React from 'react';

import Button from '../Button';
import Container from '../Container';
import Select from '../Select';
import TextArea from '../TextArea';
import './Form.scss';

export interface IDispatchProps {
  fetchMessages: () => void;
  postMessage: (message: string, isPrivate: boolean, username: string) => void;
}

export interface IInjectedProps {
  username?: string;
}

interface IState {
  message: string;
  private: boolean;
}

export type IProps = IDispatchProps & IInjectedProps;

class Form extends React.Component<IProps, IState> {
  state = {
    message: '',
    private: false,
  };

  handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      private: event.target.value === 'private',
    });
  };

  handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const username = this.props.username;
    if (!username) {
      return;
    }

    try {
      await this.props.postMessage(
        this.state.message,
        this.state.private,
        username
      );
      this.resetForm();
      this.props.fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  resetForm = () => {
    this.setState({
      message: '',
      private: false,
    });
  };

  render() {
    return (
      <Container>
        <div className="Form">
          <div>{this.props.username}</div>
          <form>
            <TextArea
              onChange={this.handleChangeTextArea}
              value={this.state.message}
            />
            <div className="Form-clickable">
              <Select onChange={this.handleChangeSelect} />
              <Button onClick={this.handleSubmit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default Form;