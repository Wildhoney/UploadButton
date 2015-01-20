(function main($document) {

    "use strict";

    /**
     * @constructor
     * @type {Function}
     */
    var UploadButton = function UploadButton() {

    };

    UploadButton.prototype = {

        /**
         * @method createInput
         * @return {Object}
         */
        createInput: function createInput() {

            var input = $document.createElement('input');
            input.setAttribute('type', 'file');

            /**
             * @method applyStyles
             * @return {void}
             */
            (function applyStyles() {

                input.style.position      = 'absolute';
                input.style.opacity       = 0.0001;
                input.style.pointerEvents = 'none';

            })();

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
            this.style.top  = (event.layerY - 10) + 'px';
            this.style.left = (event.layerX - 100) + 'px';
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
                        inputElement = uploadButton.createInput();

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