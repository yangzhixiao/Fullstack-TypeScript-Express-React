// import config from './config.json';
import * as React from 'react'
const styles = require('./Greeter.scss'); //导入
import { hi } from './utils'
import Button from './Button';
import { message } from 'antd';
import { observer } from 'mobx-react'
import store from './store'

@observer
export default class Greeter extends React.Component {

  public componentDidMount() {
    store.sayHi()
  }

  public handleClick = () => {
    message.info('aaa')
    store.sayHi()
    store.show = !store.show
  }

  render() {
    return (
      <div className={styles.greeter}>
        <div>{store.greeter || 'Loading...'}</div>
        <div className={styles.hi}>o, {hi('11111')}</div>
        {store.show ? 
          <div className={styles.nice}>Very 奈斯!</div>
          :
          <div>Not nice</div>
        }
        <Button text='Button GGG' onClick={this.handleClick} />
      </div>
    )
  }
}