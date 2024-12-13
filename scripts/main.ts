import { build_std } from './build_std';
import { parseArgs } from 'node:util';

async function main() {
    const args = parseArgs({
        options: {
            task: {
                type: 'string',
                short: 't'
            }
        }
    });
    const task = args.values.task;
    if (task === 'std') {
        await build_std();
        return;
    }
    console.log('no task provider');
}

main();
