# Quartz
![quartz](https://github.com/vhx/quartz/blob/master/app/public/quartz.screenshot.jpg)

Style guide &amp; elements + asset build pipeline for [VHX](http://vhx.tv).<br>

## Getting Started

*Note:* Currently for VHX internal use.

**Initial Setup**

1. Clone the repo
2. Run `./setup`
2. Done.

**Starting the server**

1. Run `npm start`
2. Go to: http://quartz.dev

## Build and Release

*Note:* Currently for VHX internal use. You will need permissions to push changes
to the quartz repo (VHX team members) and the quartz-rails rubygem repo. Create an
account at [https://rubygems.org/](https://rubygems.org/) and then let
<david@vhx.tv> know.

1. Bump the version in `VERSION`. Use standard practice for [semantic versioning](http://semver.org/)
2. Run `./build-and-release`
3. Done.
