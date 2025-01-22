/** 表示大小的类型 */
export type size_t = number;

/** 宽字符类型 */
export type wchar_t = number;

/**
 * 整数除法结果结构体
 */
export interface div_t {
    /** 除法的商 */
    quot: number;
    /** 除法的余数 */
    rem: number;
}

/**
 * 长整数除法结果结构体
 */
export interface ldiv_t {
    /** 长整数除法的商 */
    quot: number;
    /** 长整数除法的余数 */
    rem: number;
}

/**
 * 标准库接口定义
 */
export interface Stdlib {
    /**
     * 分配指定大小的内存空间
     * @param size 要分配的字节数
     * @returns 成功返回分配的内存指针，失败返回 null
     */
    malloc(size: size_t): object | null;

    /**
     * 分配并清零指定数量和大小的内存空间
     * @param nmemb 元素数量
     * @param size 每个元素的字节数
     * @returns 成功返回分配的内存指针，失败返回 null
     */
    calloc(nmemb: size_t, size: size_t): object | null;

    /**
     * 重新分配内存空间
     * @param ptr 原内存指针
     * @param size 新的字节数
     * @returns 成功返回新的内存指针，失败返回 null
     */
    realloc(ptr: object | null, size: size_t): object | null;

    /**
     * 释放已分配的内存空间
     * @param ptr 要释放的内存指针
     */
    free(ptr: object | null): void;

    /**
     * 将字符串转换为整数
     * @param str 要转换的字符串
     * @returns 转换后的整数值
     */
    atoi(str: string): number;

    /**
     * 将字符串转换为长整数
     * @param str 要转换的字符串
     * @returns 转换后的长整数值
     */
    atol(str: string): number;

    /**
     * 将字符串转换为浮点数
     * @param str 要转换的字符串
     * @returns 转换后的浮点数值
     */
    atof(str: string): number;

    /**
     * 将字符串转换为长整数，可指定进制
     * @param str 要转换的字符串
     * @param endptr 指向转换结束位置的指针
     * @param base 进制（2-36）
     * @returns 转换后的长整数值
     */
    strtol(str: string, endptr: object | null, base: number): number;

    /**
     * 将字符串转换为无符号长整数，可指定进制
     * @param str 要转换的字符串
     * @param endptr 指向转换结束位置的指针
     * @param base 进制（2-36）
     * @returns 转换后的无符号长整数值
     */
    strtoul(str: string, endptr: object | null, base: number): number;

    /**
     * 将字符串转换为双精度浮点数
     * @param str 要转换的字符串
     * @param endptr 指向转换结束位置的指针
     * @returns 转换后的双精度浮点数值
     */
    strtod(str: string, endptr: object | null): number;

    /**
     * 生成随机数
     * @returns 0 到 RAND_MAX 之间的随机数
     */
    rand(): number;

    /**
     * 设置随机数生成器的种子
     * @param seed 随机数种子
     */
    srand(seed: number): void;

    /**
     * 快速排序数组
     * @param base 数组起始位置
     * @param nmemb 数组元素个数
     * @param size 每个元素的字节数
     * @param compar 比较函数
     */
    qsort(base: object, nmemb: size_t, size: size_t, compar: (a: object, b: object) => number): void;

    /**
     * 二分查找
     * @param key 要查找的关键字
     * @param base 数组起始位置
     * @param nmemb 数组元素个数
     * @param size 每个元素的字节数
     * @param compar 比较函数
     * @returns 找到返回元素指针，否则返回 null
     */
    bsearch(
        key: object,
        base: object,
        nmemb: size_t,
        size: size_t,
        compar: (a: object, b: object) => number
    ): object | null;

    /**
     * 执行系统命令
     * @param command 要执行的命令
     * @returns 命令的执行结果
     */
    system(command: string): number;

    /**
     * 获取环境变量
     * @param name 环境变量名
     * @returns 环境变量值，不存在返回 null
     */
    getenv(name: string): string | null;

    /**
     * 终止程序执行
     * @param status 退出状态码
     */
    exit(status: number): never;

    /**
     * 异常终止程序
     */
    abort(): never;

    /**
     * 计算整数绝对值
     * @param n 要计算的数
     * @returns 绝对值
     */
    abs(n: number): number;

    /**
     * 计算长整数绝对值
     * @param n 要计算的数
     * @returns 绝对值
     */
    labs(n: number): number;

    /**
     * 整数除法运算
     * @param numer 被除数
     * @param denom 除数
     * @returns 包含商和余数的结构体
     */
    div(numer: number, denom: number): div_t;

    /**
     * 长整数除法运算
     * @param numer 被除数
     * @param denom 除数
     * @returns 包含商和余数的结构体
     */
    ldiv(numer: number, denom: number): ldiv_t;

    /**
     * 注册程序终止时的回调函数
     * @param func 回调函数
     * @returns 成功返回 0，失败返回非 0
     */
    atexit(func: () => void): number;

    /**
     * 获取多字节字符的长度
     * @param str 多字节字符串
     * @param n 最大检查字节数
     * @returns 字符长度，错误返回 -1
     */
    mblen(str: string | null, n: size_t): number;

    /**
     * 将多字节字符串转换为宽字符串
     * @param dest 目标宽字符串缓冲区
     * @param src 源多字节字符串
     * @param n 最大转换字符数
     * @returns 转换的字符数
     */
    mbstowcs(dest: string | null, src: string, n: size_t): size_t;

    /**
     * 将宽字符串转换为多字节字符串
     * @param dest 目标多字节字符串缓冲区
     * @param src 源宽字符串
     * @param n 最大转换字符数
     * @returns 转换的字节数
     */
    wcstombs(dest: string | null, src: string, n: size_t): size_t;
}
