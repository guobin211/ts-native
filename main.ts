import * as console from 'node:console';
import * as process from 'node:process';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as execa from 'execa';

interface ArgOptions {
    _: (string | number)[];
    $0?: string;
    run?: boolean;
    build?: boolean;
    create?: boolean;
    name?: string;
}

const printHelp = () => {
    console.log(`构建命令参数
--build: 执行构建任务
--create: 创建一个新的模块
    --names: 模块名称`);
};

async function main() {
    const args: ArgOptions = await yargs(hideBin(process.argv)).parseAsync();
    if (args.build) {
        console.log('构建项目: workspace')
        return;
    }
    if (args.create) {
        await createCrate(args.name);
        return;
    }
    printHelp();
}

async function createCrate(name: string): Promise<void> {
    if (!name) {
        console.error('No crate name provided.');
        return;
    }
    console.log(`创建模块: ${name}`);
    await execa.execaCommand(`cargo new --bin crates/${name.toLowerCase()}`)
}

main();
