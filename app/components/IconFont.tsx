import * as React from 'react'

interface IProps {
  name: string,
  size?: number,
  color: string,
  style: React.CSSProperties,
}

export default class IconFont extends React.Component<IProps, any> {

  static defaultProps: IProps = {
    name: '',
    size: 14,
    color: 'black',
    style: {}
  }

  public render() {
    const { name, size, color, style } = this.props
    const _style = Object.assign({}, style)
    _style.fontSize = style.fontSize || size
    _style.color = style.color || color
    return (
      <i
        className={`icon iconfont icon-${name}`}
        style={_style}
      />
    )
  }
}