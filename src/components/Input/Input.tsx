import * as React from 'react';

// import './Input.scss';
import Button from '../Button';
import Container from '../Container';
import Select from '../Select';
import TextArea from '../TextArea';

class Input extends React.Component<{}> {
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

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Container className="Input">
        <form>
          <TextArea onChange={this.handleChangeTextArea} />
          <Select onChange={this.handleChangeSelect} />
          <Button onClick={this.handleSubmit}>GO</Button>
        </form>
      </Container>
    );
  }
}

export default Input;
