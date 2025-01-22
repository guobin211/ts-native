/**
 * 定义一个具有 toString 方法的接口
 */
export interface ToString {
    /**
     * 将对象转换为字符串
     * @returns 字符串表示
     */
    toString(): string;
}

/**
 * 文件指针类型
 */
export type FILE = object;

/**
 * 文件打开模式
 * - r: 只读模式
 * - w: 写入模式，如果文件存在则清空内容
 * - a: 追加模式，在文件末尾写入
 * - r+: 读写模式
 * - w+: 读写模式，如果文件存在则清空内容
 * - a+: 读取和追加模式
 * 添加 b 表示二进制模式
 */
export type FileMode = "r" | "w" | "a" | "r+" | "w+" | "a+" | "rb" | "wb" | "ab" | "rb+" | "wb+" | "ab+";

/**
 * 文件定位起点枚举
 */
export enum SeekOrigin {
    /** 文件开头 */
    SEEK_SET = 0,
    /** 当前位置 */
    SEEK_CUR = 1,
    /** 文件末尾 */
    SEEK_END = 2
}

/**
 * 标准输入输出操作接口
 */
export interface Stdio {
    /**
     * 从文件流中读取数据到缓冲区
     * @param buffer 目标缓冲区
     * @param size 每个元素的大小（字节）
     * @param count 要读取的元素个数
     * @param stream 文件流
     * @returns 实际读取的元素个数
     */
    fread: (buffer: ArrayBuffer, size: number, count: number, stream: object) => number;
    /**
     * 格式化打印输出到标准输出
     * @param format 格式化字符串
     * @param args 要打印的参数列表
     */
    printf(format: string, ...args: ToString[]): void;

    /**
     * 打开文件
     * @param filename 文件名
     * @param mode 打开模式
     * @returns 成功返回文件指针，失败返回 null
     */
    fopen(filename: string, mode: FileMode): FILE | null;

    /**
     * 关闭文件
     * @param stream 文件指针
     * @returns 成功返回 0，失败返回 EOF
     */
    fclose(stream: FILE): number;

    /**
     * 刷新文件缓冲区
     * @param stream 文件指针
     * @returns 成功返回 0，失败返回 EOF
     */
    fflush(stream: FILE): number;

    /**
     * 格式化输出到文件
     * @param stream 文件指针
     * @param format 格式化字符串
     * @param args 要输出的参数列表
     * @returns 输出的字符数
     */
    fprintf(stream: FILE, format: string, ...args: ToString[]): number;

    /**
     * 格式化输出到字符串
     * @param str 目标字符串
     * @param format 格式化字符串
     * @param args 要输出的参数列表
     * @returns 写入的字符数
     */
    sprintf(str: string, format: string, ...args: ToString[]): number;

    /**
     * 从标准输入读取格式化输入
     * @param format 格式化字符串
     * @param args 接收输入的参数列表
     * @returns 成功读取的项目数
     */
    scanf(format: string, ...args: any[]): number;

    /**
     * 从文件读取格式化输入
     * @param stream 文件指针
     * @param format 格式化字符串
     * @param args 接收输入的参数列表
     * @returns 成功读取的项目数
     */
    fscanf(stream: FILE, format: string, ...args: any[]): number;

    /**
     * 从字符串读取格式化输入
     * @param str 源字符串
     * @param format 格式化字符串
     * @param args 接收输入的参数列表
     * @returns 成功读取的项目数
     */
    sscanf(str: string, format: string, ...args: any[]): number;

    /**
     * 从标准输入读取一个字符
     * @returns 读取的字符的 ASCII 值，失败返回 EOF
     */
    getchar(): number;

    /**
     * 向标准输出写入一个字符
     * @param char 要写入的字符的 ASCII 值
     * @returns 写入的字符的 ASCII 值，失败返回 EOF
     */
    putchar(char: number): number;

    /**
     * 从文件读取一个字符
     * @param stream 文件指针
     * @returns 读取的字符的 ASCII 值，失败返回 EOF
     */
    fgetc(stream: FILE): number;

    /**
     * 向文件写入一个字符
     * @param char 要写入的字符的 ASCII 值
     * @param stream 文件指针
     * @returns 写入的字符的 ASCII 值，失败返回 EOF
     */
    fputc(char: number, stream: FILE): number;

    /**
     * 从文件读取字符串
     * @param str 存储读取内容的字符串
     * @param n 最大读取字符数
     * @param stream 文件指针
     * @returns 成功返回读取的字符串，失败返回 null
     */
    fgets(str: string, n: number, stream: FILE): string | null;

    /**
     * 向标准输出写入字符串
     * @param str 要写入的字符串
     * @returns 成功返回非负数，失败返回 EOF
     */
    puts(str: string): number;

    /**
     * 向文件写入字符串
     * @param str 要写入的字符串
     * @param stream 文件指针
     * @returns 成功返回非负数，失败返回 EOF
     */
    fputs(str: string, stream: FILE): number;

    /**
     * 移动文件指针位置
     * @param stream 文件指针
     * @param offset 偏移量
     * @param origin 起始位置
     * @returns 成功返回 0，失败返回非 0
     */
    fseek(stream: FILE, offset: number, origin: SeekOrigin): number;

    /**
     * 获取文件指针当前位置
     * @param stream 文件指针
     * @returns 当前位置的偏移量
     */
    ftell(stream: FILE): number;

    /**
     * 将文件指针重置到文件开头
     * @param stream 文件指针
     */
    rewind(stream: FILE): void;

    /**
     * 检测文件错误
     * @param stream 文件指针
     * @returns 有错误返回非 0，无错误返回 0
     */
    ferror(stream: FILE): number;

    /**
     * 检测是否到达文件末尾
     * @param stream 文件指针
     * @returns 到达文件末尾返回非 0，否则返回 0
     */
    feof(stream: FILE): number;

    /**
     * 清除文件错误标志
     * @param stream 文件指针
     */
    clearerr(stream: FILE): void;

    /**
     * 设置文件缓冲区
     * @param stream 文件指针
     * @param buffer 缓冲区指针
     */
    setbuf(stream: FILE, buffer: string | null): void;

    /**
     * 设置文件缓冲区
     * @param stream 文件指针
     * @param buffer 缓冲区指针
     * @param mode 缓冲模式
     * @param size 缓冲区大小
     * @returns 成功返回 0，失败返回非 0
     */
    setvbuf(stream: FILE, buffer: string | null, mode: number, size: number): number;

    /**
     * 删除文件
     * @param filename 文件名
     * @returns 成功返回 0，失败返回非 0
     */
    remove(filename: string): number;

    /**
     * 重命名文件
     * @param oldname 原文件名
     * @param newname 新文件名
     * @returns 成功返回 0，失败返回非 0
     */
    rename(oldname: string, newname: string): number;

    /**
     * 创建临时文件
     * @returns 成功返回文件指针，失败返回 null
     */
    tmpfile(): FILE | null;

    /**
     * 生成临时文件名
     * @param str 存储文件名的字符串，如果为 null 则使用内部静态缓冲区
     * @returns 成功返回文件名字符串，失败返回 null
     */
    tmpnam(str: string | null): string | null;
}
