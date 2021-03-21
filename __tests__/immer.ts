import produce from 'immer'

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
]

const nextState = produce(baseState, draftState => {
  draftState.push({ todo: 'Tweet about it', done: false })
  draftState[1].done = true
})

describe('Immer test', () => {
  it('Bow-Wow', () => {
    expect(nextState.length).toBe(3)
  })
})


// expect(baseState.length).toBe(2)