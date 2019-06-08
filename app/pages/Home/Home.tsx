import * as React from 'react';

const styles = require('./Home.scss');
import Greeter from '../../Greeter';

export interface Props {
}

export interface State {
}

export default class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.home}>
        <Greeter />
        <span>111</span>
      </div>
    )
  }
}
