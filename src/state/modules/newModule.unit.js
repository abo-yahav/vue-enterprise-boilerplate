// import axios from 'axios'
import * as newModule from './newModule'

describe('@state/modules/newModule', () => {
  it('exports a valid Vuex module', () => {
    expect(newModule).toBeAVuexModule()
  })

  describe('in a store', () => {
    let store
    beforeEach(() => {
      store = createModuleStore(newModule)
      window.localStorage.clear()
    })

   
  })
})
