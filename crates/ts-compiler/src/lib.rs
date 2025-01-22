#![feature(const_option)]

use oxc::{allocator::Allocator, codegen::Codegen, parser::Parser, span::SourceType };

pub fn parse_ts(input: &str) -> Result<(), Box<dyn std::error::Error>> {
    let allocator = Allocator::default();
    let parser = Parser::new(&allocator, input, SourceType::ts());
    let parsed = parser.parse();
    let js = Codegen::new().build(&parsed.program);
    println!("{}", js.code);
    Ok(())
}
