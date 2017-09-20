### 1.4.9
**2017-9-18**
* Updated border colors

### 1.4.8
**2017-9-18**
* Added Checkbox Colors (again?)

### 1.4.7
**2017-9-18**
* Added Astro Granite

### 1.4.6
**2017-9-18**
* Added Astro Granite

### 1.4.5
**2017-9-18**
* Added Astro Granite

### 1.4.4
**2017-9-18**
* Added Astro Granite

### 1.4.3
**2017-9-18**
* Ran current build

### 1.4.2
**2017-9-18**
* Added vimeo grays to text

### 1.4.1
**2017-9-18**
* Added vimeo button colors to load more buttons

### 1.4.0
**2017-9-16**
* Added vimeo button colors, blue, white, and gray

### 1.3.5
**2017-9-15**
* Added vimeo $RegentGray to replace VHX gray on icons

### 1.3.4
**2017-9-14**
* Added vimeo specific checkboxes

### 1.3.3
**2017-9-13**
* Added vimeo specific elipsis colors

### 1.3.2
**2017-9-13**
* Added vimeo color apps, window, api and key icons

### 1.3.1
**2017-9-11**
* Added vimeo color variables

### 1.3.0
**2017-9-11**
* Added vimeo blue icons to svg's


### 1.2.12
**2017-07-12**
* Revert 1.2.10 which caused a regression for non-stacked radios. Non-breaking implementation uses `.truncate` instead

### 1.2.11
**2017-07-07**
* Fixed issue where opening a new select dropdown would not close open select dropdowns

### 1.2.10
**2017-05-24**
* Fixed a text overflow issue in the radio filters

### 1.2.9
**2017-04-28**
* Fixed modal issue with background flashing on page load

### 1.2.8
**2017-04-24**
* Fix checkbox icon margin by adding unit type

### 1.2.7
**2017-04-11**
* Name scope component build assets to avoid files being overridden.

### 1.2.6
**2017-04-11**
* Added selected icons for the standard select style

### 1.2.5
**2017-04-03**
* Added new VimeoVHX icons

### 1.2.4
**2017-03-24**
* Fix bug unused label_length property, causing styling issues with the select container classes.

### 1.2.3
**2017-02-16**
* Fix bug with webpack + sidebar, by removing m.startComputation and m.stopComputation.

### 1.2.2
**2017-02-16**
* Fix bug with webpack + sidebar, by removing aggressive m.redraw().

### 1.2.1
**2017-02-09**
* Apply CSS-based text truncation (with ellipsis) to select component's label/placeholder.

### 1.2.0
**2017-02-01**
* Add `label_length` option to the Tag and Select components

### 1.1.0
**2017-02-01**
* Add `checkedByDefault` and `api` options to radio component

### 1.0.0
**2017-01-18**
* Forms documentation
* Reorganize hierarchy
* Export to individual style files
* Loaders (all cover types) documentation
* Avatars documentation
* Media (Images/Embeds) documentation
* Alignment (text and containers) documentation
* Radio Buttons documentation
* Arrows, Lists, Display documentation
* Remove `module-footer` styles

### 0.10.15
**2017-01-17**
* correctly truncate lengthy strings in `media` items
* fix default dropdown caret position so it aligns with dropdown trigger

### 0.10.14
**2017-01-05**
* add `api` icon
* add `vhx-quartz.colors.scss` to `/distro` for usage via npm package

### 0.10.13
**2016-12-14**
* add alignment class to button groups
* setup package.json to publish to our scoped org, @vhx/quartz

### 0.10.12
**2016-12-08**
* document select component's `placeholder` option
* document Quartz build and release process

### 0.10.11
**2016-09-28**
* Search Component >
  - Fix bug where query was not being appended to the URL with an ampersand
* Select Component >
  - Fix bug where JS error was being thrown when hitting enter on search input
  - Ensure onBeforeClose callback method default calls done()
  - Better line heights, ensure long text doesn't break, and image is contained for media items

### 0.10.10
**2016-09-23**
* Select Component >
  - Add `onClose` callback method
  - Fix issue with not being able to select text in search input
  - Add `focusOnOpen` option
  - Change `prop_map.img` option to `prop_map.image`

### 0.10.9
**2016-09-23**
* Checkbox Component and Styles >
  - Truncate lengthy checkbox labels

### 0.10.8
**2016-09-23**
* Select Component >
  - Fix processing state text color (introduced in 0.10.5)

### 0.10.7
**2016-09-21**
* Select Component >
  - Fix processing state text color (introduced in 0.10.5)

### 0.10.6
**2016-09-21**
* Select Component >
  - Fix processing state and "No results" styling
  - Require position option to an `m.prop`
  - Add box shadow to dropdown

### 0.10.5
**2016-09-20**
* Select Component >
  - Fix bug with offset option introduced in 0.10.4

### 0.10.4
**2016-09-20**
* Styles >
  - Account for different icon sizes for buttons
  - Add `absolute` positioning class
  - Ensure icons backgrounds are hidden in processing state
  - Add `loader--offset` class
  - Add line height classes
* Select Component >
  - Remove duplicate `onSelect` callback
  - Add `offset` option
  - Fix max height issue
* Sidebar Component >
  - Fix sidebar close button background color

### 0.10.3
**2016-09-20**
* Tag Component >
  - Add ability to toggle tag processing state
* Select Component >
  - Add ability to toggle processing states of media items
  - Add position options for dropdown and carets

### 0.10.2
**2016-09-17**
* Tag Component >
  - Fix bugs with `onRemove` and `onShow` callback methods
  - Ensure hovered tag has higher z-index
* Select Component >
  - Fix some stylistic bugs
  - Add caret position option

### 0.10.1
**2016-09-17**
* Select Component >
  - Fix bugs with new media item

### 0.10.0
**2016-09-17**
* Select Component >
  - Add media item type
  - Fix some styling (use quartz classes)

### 0.9.6
**2016-09-16**
* Tag Component >
  - Add custom label option

### 0.9.5
**2016-09-16**
* Select Component >
  - Add custom trigger option

### 0.9.4
**2016-09-16**
* Sidebar Component >
  - Add `onBeforeClose` callback

### 0.9.3
**2016-09-15**
* Radio Component >
  - Fix bug introduced in 9.1, where arguments are not passed as expected

### 0.9.2
**2016-09-15**
* Sidebar Component >
  - Fix transitions

### 0.9.1
**2016-09-14**
* Select Component >
  - Fix Firefox default select styles

### 0.9.0
**2016-09-02**
* Add Modal Component
* Add Tag Component
* Radio Component >
  - Add button style
* CSS Loaders >
  - Fix centering issues
  - Improve usefulness of cover class (hide and transparent)
  - Change `loader--cover-hide` class to `loader--hide`
  - Change `loader--cover-transparent` class to `loader--transparent`
* CSS Textarea >
  - Fix missing `px` for sizes

### 0.8.18
**2016-08-03**
* Avatar Component >
  - Default to teal background
* Sidebar Component >
  - Fix Safari bug with transition when changing sidebar content and already open

### 0.8.17
**2016-08-03**
* Sidebar Component >
  - Fix Firefox bug with undefined event in document click handler
* Text Styles >
  - Added `text--lowercase` class

### 0.8.16
**2016-08-03**
* Search Input Component >
  - Fix regex for replacing `q=` query param

### 0.8.15
**2016-08-02**
* Sidebar Component >
  - Handle click to close in sidebar component
  - Add clickBlackList param for ignore certain elements when clicking to close

### 0.8.14
**2016-08-01**
* Search Input Component >
  - Add param for appending `q=` query param
  - bug fix for tracking input via mithril prop
  - Allow force search when hitting `enter`

### 0.8.13
**2016-08-01**
* Filter Component > Bug fix, closing of filter dropdown, icon swap
* Sidebar Component > Bug fix, z-index, bind esc button for closing dropdown

### 0.8.12
**2016-07-28**
* Filter Component > Bug fix, address issue when persisting component across routes, and media sizing
* Sidebar Component > Bug fix, ensure onOpen and onClose callbacks are called

### 0.8.11
**2016-07-28**
* Add sizes component
* Filter component > remove toggle when only 1 filter
* Add .is-invisible, .shadow--gray, and .img--borderless classes
* Fix .text--uppercase styling so that placeholder text remains as typed

### 0.8.10
**2016-07-21**
* Add avatar component
* Improvements/Fixes to sidebar component
* Fix loading class positioning

### 0.8.9
**2016-07-21**
* Add load more component
* Add sidebar component
* Fix bug with component css watch script

### 0.8.8
**2016-07-15**
* Fix header component subtext color
* Fix filter component bug fixes, improve styling, added filtersStartOpen option
* Add processing states for dropdown buttons
* Add table no--tick class for refined control of table ticks

### 0.8.7
**2016-07-08**
* Fix bug with removeFilter method in Filter component
* Fix styling to allow for more space for filters

### 0.8.6
**2016-07-08**
* Fix a variety of bugs with the Filter component

### 0.8.4
**2016-07-07**
* Add missind brand text colors
* Fix search input styles
* Small typo fixes
* Additional checkbox value option

### 0.8.3
**2016-07-07**
* Fix Checkbox guide > show label in demo
* Update Filter component > add size option
* Update Header component > add border option
* Update Radio component > add template item option and onchange handler
* Add `clear` class for clearing floats

### 0.8.2
**2016-07-06**
* Fix bug with build script not processing JS with Babel

### 0.8.1
**2016-07-06**
* Fix grunt build script for exported component JS/Styles

### 0.8.0
**2016-07-05**

* Add Filter Mithril Component
* Add Select Mithril Component
* Add Checkbox Mithril Component
* Add Radio Mithril Component
* Add Header Mithril Component
* Add Auto-suggest Mithril Component
* Add Template for Mithril Component Docs
* Improved the build/watch script for easier development

### 0.7.7
**2016-06-19**

* Remove Meteor / Rewrite App in NodeJS and Mithril
* Move distro and quartz-rails sub module to top level
* Move app/private/svg to top level (quartz-svg)
* Rewrite build/watch scripts for easier development
* Add quartz-js as top level folder for quartz javascript
* Add legacy style guide for reference

### 0.7.6
**2016-03-31**

* Add clapboard icon
* Add red and green text colors
* Add navy border
* Add xxsmall icon size
* Add icon-dot styling
* Add charts package (horz bar style)
* Add inline list with inline-block children style
* Spruce up grid docs
