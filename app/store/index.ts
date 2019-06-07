import { observable } from 'mobx'

class Store {
  @observable public show = false
}

const store = new Store()

export default store