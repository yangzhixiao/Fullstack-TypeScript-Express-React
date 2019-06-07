import { observable, action } from 'mobx'

class Store {
  @observable public show = false
  @observable public greeter = ''

  @action
  public sayHi = async () => {
    this.greeter = ''
    const ret = await fetch('/api/hi')
    this.greeter = await ret.text()
  }
}

const store = new Store()

export default store