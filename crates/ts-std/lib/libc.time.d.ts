/**
 * 时间类型（从1970年1月1日00:00:00 UTC开始的秒数）
 */
export type time_t = number;

/**
 * 时钟计数类型
 */
export type clock_t = number;

/**
 * 用于存储日期和时间信息的结构体
 */
export interface tm {
    /** 秒数 [0-61] */
    tm_sec: number;
    /** 分钟数 [0-59] */
    tm_min: number;
    /** 小时数 [0-23] */
    tm_hour: number;
    /** 月份中的日期 [1-31] */
    tm_mday: number;
    /** 月份 [0-11] */
    tm_mon: number;
    /** 年份，从1900年开始计数 */
    tm_year: number;
    /** 星期几 [0-6]，0代表星期日 */
    tm_wday: number;
    /** 一年中的第几天 [0-365] */
    tm_yday: number;
    /** 夏令时标志 */
    tm_isdst: number;
}

/**
 * 时间处理函数接口
 */
export interface Time {
    /**
     * 获取程序执行的处理器时间
     * @returns 处理器时间，失败返回 -1
     */
    clock(): clock_t;

    /**
     * 获取当前日历时间
     * @param timer 用于存储结果的指针，如果为null则只返回时间值
     * @returns 当前时间，失败返回 -1
     */
    time(timer: time_t | null): time_t;

    /**
     * 将time_t值转换为本地时间的tm结构
     * @param timer 时间值
     * @returns tm结构指针，失败返回null
     */
    localtime(timer: time_t): tm | null;

    /**
     * 将time_t值转换为UTC时间的tm结构
     * @param timer 时间值
     * @returns tm结构指针，失败返回null
     */
    gmtime(timer: time_t): tm | null;

    /**
     * 将tm结构转换为time_t值
     * @param timeptr tm结构指针
     * @returns time_t值
     */
    mktime(timeptr: tm): time_t;

    /**
     * 计算两个时间之间的差值
     * @param time1 结束时间
     * @param time2 开始时间
     * @returns 时间差（秒）
     */
    difftime(time1: time_t, time2: time_t): number;

    /**
     * 将时间格式化为字符串
     * @param format 格式化字符串
     * @param timeptr tm结构指针
     * @returns 格式化后的字符串
     */
    strftime(format: string, timeptr: tm): string;

    /**
     * 将tm结构转换为字符串
     * @param timeptr tm结构指针
     * @returns 时间字符串
     */
    asctime(timeptr: tm): string;

    /**
     * 将time_t值转换为字符串
     * @param timer 时间值
     * @returns 时间字符串
     */
    ctime(timer: time_t): string;
}

/**
 * 时间常量定义
 */
export const enum TimeConstants {
    /** 每秒的时钟计数数 */
    CLOCKS_PER_SEC = 1000000,

    /** 每分钟的秒数 */
    SECONDS_PER_MINUTE = 60,
    /** 每小时的分钟数 */
    MINUTES_PER_HOUR = 60,
    /** 每天的小时数 */
    HOURS_PER_DAY = 24,
    /** 每年的月数 */
    MONTHS_PER_YEAR = 12
}

/**
 * 时间格式化选项
 */
export const enum TimeFormat {
    /** 完整的星期名称 */
    FULL_WEEKDAY = "%A",
    /** 缩写的星期名称 */
    ABBREVIATED_WEEKDAY = "%a",
    /** 完整的月份名称 */
    FULL_MONTH = "%B",
    /** 缩写的月份名称 */
    ABBREVIATED_MONTH = "%b",
    /** 日期和时间 */
    DATE_AND_TIME = "%c",
    /** 年份后两位数字 */
    YEAR_2_DIGITS = "%y",
    /** 完整年份 */
    YEAR_4_DIGITS = "%Y",
    /** 月份 (01-12) */
    MONTH = "%m",
    /** 日期 (01-31) */
    DAY = "%d",
    /** 24小时制小时 (00-23) */
    HOUR_24 = "%H",
    /** 12小时制小时 (01-12) */
    HOUR_12 = "%I",
    /** 分钟 (00-59) */
    MINUTE = "%M",
    /** 秒钟 (00-59) */
    SECOND = "%S",
    /** 上午/下午标记 */
    AM_PM = "%p"
}

/**
 * 时区信息接口
 */
export interface TimeZone {
    /** 当前时区名称 */
    tzname: string;
    /** 格林威治时间和本地时间差（秒） */
    timezone: number;
    /** 夏令时标志 */
    daylight: number;
}

/**
 * 扩展时间函数接口
 */
export interface ExtendedTime extends Time {
    /**
     * 获取时区信息
     * @returns 时区信息对象
     */
    tzset(): TimeZone;

    /**
     * 获取指定年份是否为闰年
     * @param year 年份
     * @returns 是否为闰年
     */
    isleap(year: number): boolean;

    /**
     * 将秒数转换为可读的时间字符串
     * @param seconds 秒数
     * @returns 格式化的时间字符串
     */
    formatDuration(seconds: number): string;

    /**
     * 解析时间字符串
     * @param timestr 时间字符串
     * @param format 格式字符串
     * @returns tm结构，解析失败返回null
     */
    strptime(timestr: string, format: string): tm | null;
}
