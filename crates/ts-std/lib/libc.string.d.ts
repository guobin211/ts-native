/** 表示大小的类型 */
export type size_t = number;

export interface CString {
    /**
     * 计算字符串长度
     * @param str 要计算长度的字符串
     * @returns 字符串的长度（不包含结尾的空字符）
     */
    strlen: (str: string) => size_t;

    /**
     * 复制字符串
     * @param dest 目标字符串
     * @param src 源字符串
     * @returns 目标字符串
     */
    strcpy: (dest: string, src: string) => string;

    /**
     * 复制指定长度的字符串
     * @param dest 目标字符串
     * @param src 源字符串
     * @param n 要复制的最大字符数
     * @returns 目标字符串
     */
    strncpy: (dest: string, src: string, n: size_t) => string;

    /**
     * 复制字符串并分配新内存
     * @param str 要复制的字符串
     * @returns 新分配的字符串副本
     */
    strdup: (str: string) => string;

    /**
     * 连接字符串
     * @param dest 目标字符串
     * @param src 要追加的源字符串
     * @returns 连接后的字符串
     */
    strcat: (dest: string, src: string) => string;

    /**
     * 连接指定长度的字符串
     * @param dest 目标字符串
     * @param src 要追加的源字符串
     * @param n 要追加的最大字符数
     * @returns 连接后的字符串
     */
    strncat: (dest: string, src: string, n: size_t) => string;

    /**
     * 比较两个字符串
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 比较结果：小于0表示str1小于str2，等于0表示相等，大于0表示str1大于str2
     */
    strcmp: (str1: string, str2: string) => number;

    /**
     * 比较指定长度的字符串
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @param n 要比较的最大字符数
     * @returns 比较结果：小于0表示str1小于str2，等于0表示相等，大于0表示str1大于str2
     */
    strncmp: (str1: string, str2: string, n: size_t) => number;

    /**
     * 根据本地化设置比较字符串
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 比较结果：小于0表示str1小于str2，等于0表示相等，大于0表示str1大于str2
     */
    strcoll: (str1: string, str2: string) => number;

    /**
     * 根据本地化设置转换字符串
     * @param dest 目标字符串
     * @param src 源字符串
     * @param n 目标缓冲区大小
     * @returns 转换后的字符串长度
     */
    strxfrm: (dest: string, src: string, n: size_t) => size_t;

    /**
     * 查找字符在字符串中的第一次出现
     * @param str 要搜索的字符串
     * @param ch 要查找的字符
     * @returns 找到则返回该位置开始的子串，否则返回null
     */
    strchr: (str: string, ch: number) => string | null;

    /**
     * 查找字符在字符串中的最后一次出现
     * @param str 要搜索的字符串
     * @param ch 要查找的字符
     * @returns 找到则返回该位置开始的子串，否则返回null
     */
    strrchr: (str: string, ch: number) => string | null;

    /**
     * 在字符串中查找子串
     * @param haystack 要搜索的字符串
     * @param needle 要查找的子串
     * @returns 找到则返回该位置开始的子串，否则返回null
     */
    strstr: (haystack: string, needle: string) => string | null;

    /**
     * 查找字符串中首个匹配字符集合中任一字符的位置
     * @param str 要搜索的字符串
     * @param accept 接受的字符集合
     * @returns 找到则返回该位置开始的子串，否则返回null
     */
    strpbrk: (str: string, accept: string) => string | null;

    /**
     * 计算字符串中连续包含指定字符集合中字符的长度
     * @param str 要检查的字符串
     * @param accept 接受的字符集合
     * @returns 连续匹配的字符数
     */
    strspn: (str: string, accept: string) => size_t;

    /**
     * 计算字符串中连续不包含指定字符集合中字符的长度
     * @param str 要检查的字符串
     * @param reject 要排除的字符集合
     * @returns 连续不匹配的字符数
     */
    strcspn: (str: string, reject: string) => size_t;

    /**
     * 分割字符串
     * @param str 要分割的字符串，后续调用传null
     * @param delim 分隔符字符串
     * @returns 分割后的子串，没有更多子串时返回null
     */
    strtok: (str: string | null, delim: string) => string | null;

    /**
     * 获取错误信息字符串
     * @param errnum 错误码
     * @returns 对应的错误信息字符串
     */
    strerror: (errnum: number) => string;

    /**
     * 复制内存区域
     * @param dest 目标内存区域
     * @param src 源内存区域
     * @param n 要复制的字节数
     * @returns 目标内存区域
     */
    memcpy: (dest: object, src: object, n: size_t) => object;

    /**
     * 移动内存区域（处理重叠区域）
     * @param dest 目标内存区域
     * @param src 源内存区域
     * @param n 要移动的字节数
     * @returns 目标内存区域
     */
    memmove: (dest: object, src: object, n: size_t) => object;

    /**
     * 设置内存区域的值
     * @param str 目标内存区域
     * @param ch 要设置的值
     * @param n 要设置的字节数
     * @returns 目标内存区域
     */
    memset: (str: object, ch: number, n: size_t) => object;

    /**
     * 比较内存区域
     * @param str1 第一个内存区域
     * @param str2 第二个内存区域
     * @param n 要比较的字节数
     * @returns 比较结果：小于0表示str1小于str2，等于0表示相等，大于0表示str1大于str2
     */
    memcmp: (str1: object, str2: object, n: size_t) => number;

    /**
     * 在内存区域中查找字符
     * @param str 要搜索的内存区域
     * @param ch 要查找的字符
     * @param n 要搜索的字节数
     * @returns 找到则返回该位置的指针，否则返回null
     */
    memchr: (str: object, ch: number, n: size_t) => object | null;
}
