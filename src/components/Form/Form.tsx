import * as React from 'react';

import Button from '../Button';
import Container from '../Container';
import Select from '../Select';
import TextArea from '../TextArea';
import './Form.scss';

export interface IStateProps {
  isFailure: boolean;
}

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

export type IProps = IStateProps & IDispatchProps & IInjectedProps;

class Form extends React.Component<IProps, IState> {
  state = {
    message: '',
    private: false,
  };

  componentDidMount() {
    // @ts-ignore
    document.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount() {
    // @ts-ignore
    document.removeEventListener('keydown', this.keydownHandler);
  }

  keydownHandler = (event: React.KeyboardEvent): any => {
    if (event.keyCode === 13 && event.ctrlKey) {
      this.handleSubmit();
    }
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
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event) {
      event.preventDefault();
    }

    const username = this.props.username;
    if (!username) {
      return;
    }

    if (!this.state.message.trim()) {
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
      // tslint:disable-next-line
    } catch (err) {}
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
            {this.props.isFailure && (
              <div className="error">
                We were unable to post your message. Please try again later.
              </div>
            )}
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
