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

The publish script will build, tag, and publish to [NPM](https://www.npmjs.com/package/@vhx/quartz) for use across VHX applications.

1. Squash and Merge PR
1. Checkout Master branch locally
1. Update `VERSION` (using [Semantic Versioning](http://semver.org/))
1. Update `CHANGELOG` (add new entry using `VERSION`'s number, the date, and description from PR)
1. Run `./publish`

## Using in your Application

#### First install via NPM.
```
npm install @vhx/quartz
```

#### Then include Quartz files as needed.

Include all of Quartz core (in SASS or LESS). This does not include icons.
```
@import '~@vhx/quartz/dist/quartz.css';

// minified
@import '~@vhx/quartz/dist/quartz.min.css';
```

Or include individual features and icons (in SASS or LESS).
```
@import '~@vhx/quartz/dist/grid.css';
@import '~@vhx/quartz/dist/icon-code.css';
```