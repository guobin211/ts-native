import { stdio } from 'ts-std/libc'

function testAddNumber(a: number) {
    return a + 1
}

function testAddString(a: string) {
    return a + ' world'
}

const r1 = testAddNumber(0)
const r2 = testAddString('hello')

stdio.printf('%d\n', r1)
stdio.printf('%s\n', r2)
