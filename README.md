# Quartz
![quartz](https://github.com/vhx/quartz/blob/master/app/public/quartz.screenshot.jpg)

Style guide &amp; elements + asset build pipeline for [VHX](http://vhx.tv).<br>

## Getting Started

1. Create quartz.dev pow config: `echo 3001 > ~/.pow/quartz`
2. In Quartz repo directory, go to the app folder `cd app/`
3. Install Meteor: `curl https://install.meteor.com/ | sh`
4. Install Meteor dependencies with `meteor install`
5. Run: `meteor run --port 3001`
6. Go to: http://quartz.dev

## Initialize the Quartz-Rails submodule

1. cd into `app/private/quartz-rails`
2. Run `git submodule update --init`
3. Checkout to `master`

*NOTE:* You'll now have a repo within a repo. Pushing from the root of `Quartz` will not affect `Quartz-Rails`, and vice versa. If you'd like to push changes made to `Quartz-Rails`, you'll have to cd into the folder and push from it.

## Building the Ruby gem

*Note:* You'll need permissions to push changes to the quartz-rails rubygem repo. Create an account at [https://rubygems.org/](https://rubygems.org/) and then let [David](david@vhx.tv) know.

1. cd to the root of the `Quartz` app
2. Run `grunt build` to generate the new css/scss files
3. Bump the `quartz-rails` version in `app/private/quartz-rails/lib/vhx/quartz/version`
4. cd into `app/private/quartz-rails`
5. Run `rake build`
6. Run `rake release`

## Building the Bower package

1. Bump the version number in `bower.json`
2. Stage and commit your changes
3. Tag the commit with `git tag -a VERSION_NUMBER -m "Release version x.x.x"`
4. Push to both github and bower with `git push origin master --tags`

## TODO
- Automate the two above things