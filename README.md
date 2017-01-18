# Quartz
![quartz](https://github.com/vhx/quartz/blob/master/app/public/quartz.screenshot.jpg)

Style guide &amp; elements + asset build pipeline for [VHX](http://vhx.tv).<br>

## Getting Started

*Note:* Currently for VHX internal use.

**Initial Setup**

1. Clone the repo
1. Run `./setup`
1. Done.

**Starting the server**

1. Run `./server`
1. Go to: http://quartz.dev

## Build and Release

*Note:* Currently for VHX internal use. You will need permissions to push changes
to the quartz repo (VHX team members) and the quartz npm package.

**Release Steps**

The build and release script will release both the `vhx-quartz` gem and `vhx-quartz` bower packages for use across VHX applications.

1. Squash and Merge PR
1. Checkout Master branch locally
1. Update `VERSION` (using [Semantic Versioning](http://semver.org/))
1. Update `CHANGELOG` (add new entry using `VERSION`'s number, the date, and description from PR)
1. Run `./build`

## Using in your Application

You can use Quartz either through the Ruby Gem or Bower package.