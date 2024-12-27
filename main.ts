import * as console from 'node:console';
import yargs from 'yargs';

interface ArgOptions {
    _: (string | number)[];
    $0?: string;
    run?: boolean;
    build?: boolean;
    create?: boolean;
    name?: string;
}

async function main() {
    const args: ArgOptions = await yargs.parseAsync();
    if (args.create) {
        await createCrate(args.name);
    }
}

async function createCrate(name: string): Promise<void> {
    if (!name) {
        console.error('No crate name provided.');
        return;
    }
    console.log(`创建模块:${name}`);
}

main();
