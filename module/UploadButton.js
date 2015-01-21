(function main($document) {

    "use strict";

    /**
     * @constant MOUSE
     * @type {{OFFSET_Y: number, OFFSET_X: number}}
     */
    var MOUSE = {
        OFFSET_Y: 10,
        OFFSET_X: 100
    };

    /**
     * @constructor
     * @type {Function}
     */
    var UploadButton = function UploadButton() {};

    /**
     * @property prototype
     * @type {Object}
     */
    UploadButton.prototype = {

        /**
         * @method createInput
         * @param rootElement {Object}
         * @return {Object}
         */
        createInput: function createInput(rootElement) {

            var input = $document.createElement('input');
            input.setAttribute('type', 'file');

            /**
             * @method applyAttributes
             * @param attributes {Array}
             * @return {void}
             */
            (function applyAttributes(attributes) {

                attributes.forEach(function forEach(attribute) {

                    // Define each attribute with a fallback default value.
                    var name = attribute.attr;
                    input.setAttribute(name, rootElement.getAttribute(name) || attribute.default);
                    rootElement.removeAttribute(name);

                });

            })([
                { attr: 'accept',   default: '*'    },
                { attr: 'multiple', default: false  },
                { attr: 'required', default: false  }
            ]);

            /**
             * @method applyStyles
             * @param styles {Array}
             * @return {void}
             */
            (function applyStyles(styles) {

                styles.forEach(function forEach(style) {

                    // Define each style property with its value.
                    input.style[style.property] = style.value;

                });

            })([
                { property: 'position',      value: 'absolute'  },
                { property: 'opacity',       value: 0.0001      },
                { property: 'pointerEvents', value: 'none'      }
            ]);

            return input;

        },

        /**
         * @method setupClick
         * @return {void}
         */
        setupClick: function setupClick() {
            this.click();
        },

        /**
         * @method setupMouseMove
         * @param event {Object}
         * @return {void}
         */
        setupMouseMove: function setupMouseMove(event) {
            this.style.top  = (event.layerY - MOUSE.OFFSET_Y) + 'px';
            this.style.left = (event.layerX - MOUSE.OFFSET_X) + 'px';
        },

        /**
         * @method createShadowDOM
         * @param rootElement {Object}
         * @param inputElement {Object}
         * @return {void}
         */
        createShadowDOM: function createShadowDOM(rootElement, inputElement) {
            var spanElement = $document.createElement('span');
            rootElement.appendChild(spanElement).createShadowRoot().appendChild(inputElement);
        }

    };

    $document.addEventListener('DOMContentLoaded', function() {

        var proto = Object.create(HTMLElement.prototype, {

            /**
             * @property createdCallback
             * @type {Object}
             */
            createdCallback: {

                /**
                 * @method value
                 * @return {void}
                 */
                value: function value() {

                    var uploadButton = new UploadButton(),
                        inputElement = uploadButton.createInput(this);

                    // Setup the events.
                    this.onclick     = uploadButton.setupClick.bind(inputElement);
                    this.onmousemove = uploadButton.setupMouseMove.bind(inputElement);

                    // Create shadow DOM root.
                    uploadButton.createShadowDOM(this, inputElement);
                }
            }

        });

        /**
         * @property MegaButton
         * @type {Object}
         */
        $document.registerElement('upload-button', {
            prototype: proto,
            extends: 'button'
        });

    });

})(window.document);