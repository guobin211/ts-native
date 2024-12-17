const std = @import("std");
const reflect = @import("reflect.zig");

pub fn main() !void {
    std.debug.print("ts-native-zig\n", .{});
    reflect.init_reflect();
    reflect.pointer();
}
