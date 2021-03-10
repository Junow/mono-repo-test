import {add} from '@junow/shared'

describe('addd', () => {
  it('add', () => {
    const expectedValue= add(1,2)

    expect(3).toBe(expectedValue);
  })
})
