# Quartz
![quartz](https://github.com/vhx/quartz/blob/master/app/public/quartz.screenshot.jpg)

Style guide &amp; elements + asset build pipeline for [VHX](http://vhx.tv).<br>

## Getting Started

*Note:* Currently for VHX internal use.

**Initial Setup**

**1)** Clone the repo  
**2)** Run `./setup`  
**3)** Done.

**Starting the server**

**1)** Run `./server`  
**2)** Go to: http://quartz.dev

## Build and Release

*Note:* Currently for VHX internal use. You will need permissions to push changes
to the quartz repo (VHX team members) and the quartz-rails rubygem repo. Create an
account at [https://rubygems.org/](https://rubygems.org/) and then let
<david@vhx.tv> know.


**Release Steps**

The build and release script will release both the `vhx-quartz` gem and `vhx-quartz` bower packages for use across VHX applications.

**1)** Bump the version in `VERSION`. Use standard practice for [semantic versioning](http://semver.org/)  
**2)** Run `./build-and-release`  
**3)** Done.  

## Using in your Application

You can use Quartz either through the Ruby Gem or Bower package.

**Via the Ruby Gem**

**1)**  Add the VHX Quartz to your Gemfile
```ruby
gem 'vhx-quartz'
```

**2)**  Then install the gem either via
```shell
bundle install
```
or directly with
```shell
gem install vhx-quartz
```

**3)** Then include in your layout or SASS files

*a. In your Layout*

  Add the following to your `config.rb` file
```ruby
sprockets.import_asset 'vhx-quartz.css'
```

Then include in your layout directly
```html
<%= stylesheet_link_tag  'vhx-quartz' %>
```

*b. Or in your SASS files*

At the top of your file, either via the asset pipeline
```sass
//= require vhx-quartz
```

Or via a SASS import
```sass
@import "vhx-quartz"
```

### Via the Bower Package

**1)**  Install Bower via npm if you don't already have it installed
```shell
npm install -g bower
```
**2)**  Add the VHX Quartz package to your repo
```shell
bower install vhx-quartz
```
