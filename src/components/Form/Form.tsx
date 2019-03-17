import * as React from 'react';

import Button from '../Button';
import Container from '../Container';
import Select from '../Select';
import Svg from '../Svg';
import TextArea from '../TextArea';
import './Form.scss';

export interface IStateProps {
  isFailure: boolean;
  username: string | undefined;
}

export interface IDispatchProps {
  fetchMessages: () => void;
  postMessage: (message: string, isPrivate: boolean, username: string) => void;
}

interface IState {
  message: string;
  private: boolean;
}

export type IProps = IStateProps & IDispatchProps;

const OPTIONS = [
  {
    label: 'Public',
    value: 'public',
  },
  {
    label: 'Private',
    value: 'private',
  },
];

class Form extends React.Component<IProps, IState> {
  initialState = {
    message: '',
    private: false,
  };

  state = this.initialState;

  handleKeyDown = (event: React.KeyboardEvent): any => {
    // Submit form when Ctrl + Enter key are pressed
    if (event.keyCode === 13 && event.ctrlKey) {
      this.handleSubmit();
    }
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      private: event.target.value === 'private',
    });
  };

  handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = async (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const username = this.props.username;
    if (event) {
      event.preventDefault();
    }

    if (!username) {
      return;
    }

    // if the message is empty, do not submit
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

  renderError = () => {
    return (
      <div className="error">
        We were unable to post your message. Please try again later.
      </div>
    );
  };

  resetForm = () => {
    this.setState(this.initialState);
  };

  render() {
    return (
      <Container>
        <div className="Form">
          <div>{this.props.username}</div>
          <form>
            <TextArea
              onChange={this.handleTextAreaChange}
              onKeyDown={this.handleKeyDown}
              value={this.state.message}
            />
            {this.props.isFailure && this.renderError()}
            <div className="Form-clickable">
              <Select onChange={this.handleSelectChange} options={OPTIONS} />
              <Button onClick={this.handleSubmit}>
                <Svg width={15} height={15} name="arrowRight" />
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

export default Form;
