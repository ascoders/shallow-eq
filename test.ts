import test from 'ava'
import shallowEq from './index'

test('should equal', t => {
    t.true(shallowEq(
        {a: 1, b: 2, c: undefined},
        {a: 1, b: 2, c: undefined}
    ))

    t.true(shallowEq(
        {a: 1, b: 2, c: 3},
        {a: 1, b: 2, c: 3}
    ))

    const o = {}
    t.true(shallowEq(
        {a: 1, b: 2, o},
        {a: 1, b: 2, o}
    ))

    const d = function () {
        return 1
    }
    t.true(shallowEq(
        {a: 1, b: 2, o, d},
        {a: 1, b: 2, o, d}
    ))
})

test('should return false if arguments fields are different function identities', t => {
    t.false(shallowEq(
        {a: 1, b: 2, d: () => 1},
        {a: 1, b: 2, d: () => 1}
    ))
})

test('should return false if first argument has too many keys', t => {
    t.false(shallowEq(
        {a: 1, b: 2, c: 3},
        {a: 1, b: 2}
    ))
})

test('should return false if second argument has too many keys', t => {
    t.false(shallowEq(
        {a: 1, b: 2},
        {a: 1, b: 2, c: 3}
    ))
})

test('should return false if arguments have different keys', t => {
    t.false(shallowEq(
        {a: 1, b: 2, c: undefined},
        {a: 1, bb: 2, c: undefined}
    ))
})
