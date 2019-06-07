// import config from './config.json';
import * as React from 'react'
import styles from './Greeter.scss'; //导入
import { hi } from './utils'
import Button from 'Button';

export default class Greeter extends React.Component {
  render() {
    return (
      <div className={styles.greeter}>
        Hi there and greetings from JSON!
        <div className={styles.hi}>o, {hi('11111')}</div>
        <div className={styles.nice}>Very 奈斯!</div>
        <Button text='Button GGG' />
      </div>
    )
  }
}