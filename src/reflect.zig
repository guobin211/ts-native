const std = @import("std");

const Person = struct {
    // arrtibute
    name: []const u8,
    age: u32,

    // static fn
    pub fn init(name: []const u8, age: u32) Person {
        return Person{ .name = name, .age = age };
    }
};

const Point = struct {
    x: f32,
    y: f32,

    pub var z: f32 = 0.0;
};

pub fn pointer() void {
    var integer: i16 = 666;
    const ptr = &integer;
    ptr.* = ptr.* + 1;
    std.debug.print("ptr: {}, {}\n", .{ ptr, integer });
}

pub fn init_reflect() void {
    std.debug.print("init reflect\n", .{});
    const name = "jack";
    const age = 22;
    const jack = Person.init(name, age);
    std.debug.print("name: {s}, age: {d}\n", .{ jack.name, jack.age });
    // 通过 @typeInfo 获取类型信息
    const type_info = @typeInfo(Person);
    // 断言它为 struct
    const struct_info = type_info.Struct;
    // inline for 打印该结构体内部字段的信息
    inline for (struct_info.fields) |field| {
        std.debug.print("field name is {s}, field type is {}\n", .{
            field.name,
            field.type,
        });
    }
    var p = Point{ .x = 1.0, .y = 2.0 };
    @field(p, "x") = 2.0;
    @field(p, "y") = @field(p, "x") + 1.0;
    std.debug.print("x: {d}, y: {d}\n", .{ p.x, p.y });
    std.debug.print("y: {}\n", .{@hasField(Point, "y")});
}
