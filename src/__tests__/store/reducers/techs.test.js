import reducer, { INITIAL_STATE } from '~/store/modules/techs/reducer'
import * as Techs from '~/store/modules/techs/actions'

describe('Techs reducers', () => {
  it('should handle ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, Techs.addTech('React.js'))

    expect(state).toStrictEqual(['React.js'])
  })
})
