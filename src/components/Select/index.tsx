import * as React from 'react';

import './Select.scss';

interface IOption {
  label: string;
  value: string;
}

interface IInjectedProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: IOption[];
}

interface IDefaultProps {
  options: IOption[];
}

export type IProps = IInjectedProps & IDefaultProps;

export default class Select extends React.Component<IProps> {
  static defaultProps = {
    options: [
      {
        label: 'Public',
        value: 'public',
      },
      {
        label: 'Private',
        value: 'private',
      },
    ],
  };

  renderOption = (option: IOption) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  };

  render() {
    return (
      <div className="Select">
        <select onChange={this.props.onChange}>
          {this.props.options.map(this.renderOption)}
        </select>
      </div>
    );
  }
}
