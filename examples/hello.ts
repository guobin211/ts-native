import { stdio } from 'ts-std/libc'
import { Stdio } from 'ts-std/libc.stdio'

/**
 * equal to c struct
 */
class User {
    username: string
    home: string

    constructor(username: string, home: string) {
        this.username = username
        this.home = home
    }
}

function readFileToBuffer(p: string, b: ArrayBuffer, io: Stdio) {
    let len = -1
    const file = io.fopen(p, 'r')
    if (file) {
        len = io.fread(b, 1, b.byteLength, file)
    }
    io.fclose(file)
    return len
}

/**
 * equal to c main function
 */
export function main(args: string[]) {
    for (let i = 0; i < args.length; i++) {
        stdio.printf('arg[%d]: %s', i, args[i])
    }
    const dev = new User('root', '/root')
    stdio.printf(dev.toString())
    let buffer = new ArrayBuffer(1024 * 2)
    let len = readFileToBuffer('./main.ts', buffer, stdio)
    if (len > 0) {
        stdio.printf('read %d bytes from file', len)
    }
}
