jsnice
======

Command line interface to http://jsnice.org.

## Installation
```bash
npm install -g jsnice
```

## Usage

```bash
$ jsnice --help
Usage:
  jsnice <file>
  jsnice [--no-pretty] [--no-transpile] [--no-packers] [--no-rename] [--no-types] [--suggest] <file>
  jsnice (--help | --version)

Options:
  --help       Show this text
  --version    Show jsnice version info
  --no-pretty  Dont prettify the script
  --no-transpile  Dont transpile to ES5
  --no-packers  Dont detect packers
  --no-rename  Dont rename variables
  --no-types   Dont add doc strings for params/returns
  --suggest    Suggest new local names e.g. local$$2
```

```bash
$ jsnice ./script.js
```

## License
The MIT License (MIT) Copyright (c) 2014 Brett Langdon <brett@blangdon.com> (http://brett.is)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
