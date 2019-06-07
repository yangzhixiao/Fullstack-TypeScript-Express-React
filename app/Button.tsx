import * as React from 'react'
const styles = require('./Button.scss')

interface IProps {
  text?: string,
  onClick?: () => void,
}

export default class Button extends React.Component<IProps, any> {
  static defaultProps: IProps = {
    text: 'Button',
    onClick: () => {},
  }
  public handleClick = () => {
    this.props.onClick!()
  }
  public render() {
    return (
      <div
        className={styles.button}
        onClick={this.handleClick}
      >
        {this.props.text}
      </div>
    )
  }
}