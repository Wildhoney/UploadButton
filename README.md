# UploadButton

![Travis](http://img.shields.io/travis/Wildhoney/UploadButton.svg?style=flat)
&nbsp;
![Experimental](http://img.shields.io/badge/experimental-%E2%9C%93-blue.svg?style=flat)
&nbsp;
![License MIT](http://img.shields.io/badge/license-mit-orange.svg?style=flat)

* **Heroku**: [http://upload-button.herokuapp.com/](http://upload-button.herokuapp.com/)

## Requirements

`UploadButton` uses both [Custom Elements](http://caniuse.com/#search=Custom%20Elements) and [Shadow DOM](http://caniuse.com/#search=Shadow%20DOM) which at present time requires a bleeding-edge browser such as [Chrome Canary](https://www.google.co.uk/chrome/browser/canary.html).

## Getting Started

Once you've satisfied [the requirements](#requirements) you may begin adding the `UploadButton` HTML into your DOM:

```html
<button is="upload-button">
    Upload File
</button>
```

With that the `registerElement` invocation within the module will register the *type extension custom element* &mdash; `upload-button` &mdash; as an extension of `HTMLButtonElement.prototype` which means that without any styling, the element will appear as a normal button &mdash; yet clicking on the element will invoke the file selection modal.

### Attributes

By applying [certain attributes](http://www.w3.org/TR/html-markup/input.file.html) to the `button` element these will automagically be relayed onto the `input` element for uploading the files.

* `accept`, default being <strong>*</strong>
* `autofocus`, default being *unset*
* `disabled`, default being *unset*
* `form`, default being *unset*
* `multiple`, default being *unset*
* `name`, default being *unset*
* `required`, default being *unset*

Attributes are defined in the usual way with the `button` element:

```html
<button is="upload-button" multiple="multiple">
    Upload Files
</button>
```