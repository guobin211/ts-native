# ts-native

typescript native script, use llvm compile to native code

## Quick Start

> touch example.ts

```ts
import { stdio } from 'libc';

stdio.printf('hello world');
```

### Compiler

```bash
tsn ./example.ts --release

./example.exe
```

## Language Graph
