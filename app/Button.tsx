import * as React from 'react'

interface IProps {
  text: string
}

export default class Button extends React.Component<IProps, any> {
  public render() {
    return (
      <div style={{
        lineHeight: '30px',
        color: 'Blue'
      }}>{this.props.text}</div>
    )
  }
}