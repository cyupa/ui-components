import * as React from "react";
import { KeyCode } from "../../util/keyboard";
import { TextInput } from "../TextInput";

export interface Props {
  autofocus?: boolean;
  disabled?: boolean;
  error?: string;
  height?: number;
  maxLength?: number;
  onDismiss?: () => void;
  onSave: (value: string) => void;
  placeholder?: string;
  value: string;
}

export interface State {
  value: string;
}

export class SmartTextInput extends React.PureComponent<Props, State> {
  public state: Readonly<State> = {
    value: this.props.value
  };

  public componentWillReceiveProps(nextProps: Props) {
    this.setState({
      value: nextProps.value
    });
  }

  private readonly handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    this.setState({
      value: input.value
    });
  };

  private readonly handleBlur = () => {
    if (this.state.value != this.props.value) {
      this.props.onSave(this.state.value);
    } else if (this.props.onDismiss !== undefined) {
      this.props.onDismiss();
    }
  };

  private readonly handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (event.keyCode === KeyCode.Enter) {
      input.blur();
    } else if (event.keyCode === KeyCode.Escape && this.props.onDismiss !== undefined) {
      this.props.onDismiss();
    }
  };

  public render() {
    const { autofocus, disabled, error, height, maxLength, placeholder } = this.props;
    const { value } = this.state;

    return (
      <TextInput
        autoFocus={autofocus}
        disabled={disabled}
        error={error}
        height={height}
        maxLength={maxLength}
        onBlur={this.handleBlur}
        onChange={this.handleOnChange}
        onKeyDown={this.handleKeyDown}
        placeholder={placeholder}
        value={value}
      />
    );
  }
}
