import { stdio } from 'ts-std/libc';

export function __main__(args: string[]) {
    for (let i = 0; i < args.length; i++) {
        stdio.printf('arg[%d]: %s', i, args[i]);
    }
}
