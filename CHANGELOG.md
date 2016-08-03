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
