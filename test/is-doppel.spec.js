import { isDoppel } from '../src/is-doppel'

test('isDoppel', () => {
    const a1 = 0
    const b1 = 0
    const a2 = 'you are doppel'
    const b2 = 'you are doppel'
    const a3 = [0, 2, 'a', {a: 'a', b: {c: 'c', d: true}}]
    const b3 = [0, 2, 'a', {a: 'a', b: {c: 'c', d: true}}]
    expect(isDoppel(a1, b1)).toBeTruthy()
    expect(a1 === b1).toBeTruthy()
    expect(isDoppel(a2, b2)).toBeTruthy()
    expect(a2 === b2).toBeTruthy()
    expect(isDoppel(a3, b3)).toBeTruthy()
    expect(a3 === b3).toBeFalsy()
})