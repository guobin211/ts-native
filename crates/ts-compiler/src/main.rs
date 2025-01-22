#![feature(const_option)]

use ts_compiler::parse_ts;

fn main() {
    let ts_code = include_str!("../examples/1.ts");
    parse_ts(ts_code).unwrap();
}
