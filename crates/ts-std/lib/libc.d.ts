export interface Stdio {
    /**
     * 打印输出
     */
    printf: (arg: string, ...args: ToString[]) => void;
}

interface ToString {
    toString(): string;
}

export interface Stdlib {
    exit(code: number): void;
}

export interface Time {
    time(t?: number | null): number;
}

export interface Math {
    cos(angle: number): number;
}

/**
 * 标准输入输出
 */
export declare const stdio: Stdio;

/**
 * 操作日期和时间
 */
export declare const time: Time;

/**
 * 通用工具函数
 */
export declare const stdlib: Stdlib;

/**
 * 数学函数
 */
export declare const math: Math;
