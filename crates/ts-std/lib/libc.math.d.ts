/**
 * Math 模块接口定义，包含标准数学函数
 */
export interface Math {
    /**
     * 计算给定角度的正弦值
     * @param x 以弧度表示的角度
     * @returns 返回角度的正弦值，范围在 [-1, 1] 之间
     */
    sin(x: number): number;

    /**
     * 计算给定角度的余弦值
     * @param x 以弧度表示的角度
     * @returns 返回角度的余弦值，范围在 [-1, 1] 之间
     */
    cos(x: number): number;

    /**
     * 计算给定角度的正切值
     * @param x 以弧度表示的角度
     * @returns 返回角度的正切值
     */
    tan(x: number): number;

    /**
     * 计算给定值的反正弦值
     * @param x 要计算反正弦的值，范围在 [-1, 1] 之间
     * @returns 返回以弧度表示的角度，范围在 [-π/2, π/2] 之间
     */
    asin(x: number): number;

    /**
     * 计算给定值的反余弦值
     * @param x 要计算反余弦的值，范围在 [-1, 1] 之间
     * @returns 返回以弧度表示的角度，范围在 [0, π] 之间
     */
    acos(x: number): number;

    /**
     * 计算给定值的反正切值
     * @param x 要计算反正切的值
     * @returns 返回以弧度表示的角度，范围在 [-π/2, π/2] 之间
     */
    atan(x: number): number;

    /**
     * 计算给定坐标点的反正切值
     * @param y y 坐标值
     * @param x x 坐标值
     * @returns 返回以弧度表示的角度，范围在 [-π, π] 之间
     */
    atan2(y: number, x: number): number;

    /**
     * 计算给定值的双曲正弦值
     * @param x 要计算双曲正弦的值
     * @returns 返回双曲正弦值
     */
    sinh(x: number): number;

    /**
     * 计算给定值的双曲余弦值
     * @param x 要计算双曲余弦的值
     * @returns 返回双曲余弦值
     */
    cosh(x: number): number;

    /**
     * 计算给定值的双曲正切值
     * @param x 要计算双曲正切的值
     * @returns 返回双曲正切值
     */
    tanh(x: number): number;

    /**
     * 计算 e 的 x 次幂
     * @param x 指数值
     * @returns 返回 e^x 的值
     */
    exp(x: number): number;

    /**
     * 计算给定值的自然对数
     * @param x 要计算对数的值，必须大于 0
     * @returns 返回自然对数值
     */
    log(x: number): number;

    /**
     * 计算给定值以 10 为底的对数
     * @param x 要计算对数的值，必须大于 0
     * @returns 返回以 10 为底的对数值
     */
    log10(x: number): number;

    /**
     * 计算 x 的 y 次幂
     * @param x 底数
     * @param y 指数
     * @returns 返回 x^y 的值
     */
    pow(x: number, y: number): number;

    /**
     * 计算给定值的平方根
     * @param x 要计算平方根的值，必须大于等于 0
     * @returns 返回平方根值
     */
    sqrt(x: number): number;

    /**
     * 向上取整
     * @param x 要取整的值
     * @returns 返回大于或等于 x 的最小整数
     */
    ceil(x: number): number;

    /**
     * 向下取整
     * @param x 要取整的值
     * @returns 返回小于或等于 x 的最大整数
     */
    floor(x: number): number;

    /**
     * 计算浮点数的绝对值
     * @param x 要计算绝对值的数
     * @returns 返回绝对值
     */
    fabs(x: number): number;

    /**
     * 计算整数的绝对值
     * @param x 要计算绝对值的数
     * @returns 返回绝对值
     */
    abs(x: number): number;

    /**
     * 计算浮点数除法的余数
     * @param x 被除数
     * @param y 除数
     * @returns 返回 x/y 的余数
     */
    fmod(x: number, y: number): number;
}

/**
 * 数学常量枚举
 */
export const enum MathConstants {
    /** 自然对数的底 e */
    M_E = 2.718281828459045,
    /** π 值 */
    M_PI = 3.141592653589793,
    /** ln(2) */
    M_LN2 = 0.693147180559945,
    /** ln(10) */
    M_LN10 = 2.302585092994046
}

/**
 * 错误类型枚举
 */
export enum MathError {
    /** 定义域错误 */
    EDOM = 1,
    /** 值域错误 */
    ERANGE = 2
}

/**
 * 浮点数类型
 */
export type FloatType = 'float' | 'double' | 'long double';

/**
 * 数学计算结果接口
 */
export interface MathResult {
    /** 计算结果 */
    value: number;
    /** 错误代码 */
    error?: MathError;
}

/**
 * 扩展数学函数接口
 */
export interface ExtendedMath extends Math {
    /**
     * 检查值是否为 NaN
     * @param x 要检查的值
     * @returns 如果值为 NaN 返回 true，否则返回 false
     */
    isnan(x: number): boolean;

    /**
     * 检查值是否为无穷大
     * @param x 要检查的值
     * @returns 如果值为无穷大返回 true，否则返回 false
     */
    isinf(x: number): boolean;

    /**
     * 检查值是否为有限数
     * @param x 要检查的值
     * @returns 如果值为有限数返回 true，否则返回 false
     */
    isfinite(x: number): boolean;

    /**
     * 四舍五入
     * @param x 要四舍五入的值
     * @returns 返回最接近的整数
     */
    round(x: number): number;
}

/** 正无穷大常量 */
export declare const INFINITY: number ;

/** 非数值常量 */
export declare const NAN: number;
