# &lt;local-time&gt; Element

Formats date as a localized string or as relative text that auto updates in the user's browser.

## Installation

Available on [Bower](http://bower.io) as **local-time-element**.

```
$ bower install local-time-element
```

This component is built on the upcoming [Web Component](http://webcomponents.github.io/) stack. Specifically, it requires a feature called [Custom Elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/). You'll need need to use a Polyfill to get this feature today. Either the [Polymer](http://www.polymer-project.org/) or [X-Tag](http://www.x-tags.org/) frameworks supply a polyfill or you can install the standalone [CustomElements](https://github.com/Polymer/CustomElements) polyfill.

``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/polymer/0.2.2/platform.js"></script>
```


## Usage

``` html
<time is="local-time" datetime="2014-04-01T16:30:00-08:00" format="%m/%d/%y %l:%M%p">
  04/01/14 4:30PM PDT
</time>
<!-- <time is="local-time">04/01/14 6:30PM</time> -->
```

All elements MUST have a `datetime` attribute set to a ISO8601 formatted timestamp. `format` is a unix strftime format to set to the text contents of the element.

``` html
<time is="local-time" datetime="2014-04-01T16:30:00-08:00" format="%m/%d/%y" title-format="%m/%d/%y %l:%M%p">
  04/01/14
</time>
<!-- <local-time title="04/01/14 6:30PM">04/01/14</local-time> -->
```

A title attribute has also be given a local format by setting `title-format`.

A relative time ago in words description can be generated by using the `relative-time` element extension.

``` html
<time is="relative-time datetime="2014-04-01T16:30:00-08:00">
  04/01/14
</time>
<!-- <time is="relative-time">1 week ago</time> -->
```

### Options

Attribute      | Options                                | Description
---            | ---                                    | ---
`datetime`     | ISO8601 *string*                       | Required date of element
`format`       | strftime format *string*               | Format to localize the text content
`title-format` | strftime format *string*               | Format to localize the `title` attribute

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | 6.1+ ✔ |


## See Also

Most of this implementation is based on Basecamp's [local_time](https://github.com/basecamp/local_time) component. Thanks to @javan for open sourcing that work and allowing for others to build on top of it.

@rmm5t's [jquery-timeago](https://github.com/rmm5t/jquery-timeago) is one of the olds timeago in words JS plugins.
