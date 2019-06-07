// import config from './config.json';
import * as React from 'react'
import styles from './Greeter.scss'; //导入
import { hi } from './utils'
import Button from 'Button';
const antd = require('antd')

export default class Greeter extends React.Component {

  public handleClick = () => {
    antd.message.info('aaa')
  }

  render() {
    return (
      <div className={styles.greeter}>
        Hi there and greetings from JSON!
        <div className={styles.hi}>o, {hi('11111')}</div>
        <div className={styles.nice}>Very 奈斯!</div>
        <Button text='Button GGG' onClick={this.handleClick} />
        
      </div>
    )
  }
}