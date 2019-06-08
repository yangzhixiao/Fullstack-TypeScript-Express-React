import * as React from 'react';
import { render } from 'react-dom';
// import Greeter from './Greeter';
import AppRouter from './AppRouter'

// import 'antd/dist/antd.css';
import './main.css';//使用require导入css文件

render(<AppRouter />, document.getElementById('root'));