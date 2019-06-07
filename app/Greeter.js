import config from './config.json';
import * as React from 'react'
import styles from './Greeter.scss'; //导入
import { hi } from './utils'

export default class Greeter extends React.Component {
  render() {
    return (
      <div className={styles.greeter}>
        {config.greetText}
        <div className={styles.hi}>o, {hi('666')}</div>
        <div className={styles.yo}>Very 奈斯!</div>
      </div>
    )
  }
}