describe('a', function() {

    var uploadButton, inputElement, rootElement;

    /**
     * @method createElement
     * @param [attributes=[]] {Array}
     * @return {Object}
     */
    var createElement = function createElement(attributes) {

        rootElement = document.createElement('button');
        rootElement.setAttribute('is', 'upload-button');

        (attributes || []).forEach(function forEach(attribute) {
            rootElement.setAttribute(attribute.name, attribute.value);
        });

        uploadButton = new UploadButton();
        inputElement = uploadButton.createInput(rootElement);
        uploadButton.createShadowDOM(rootElement, inputElement);
        return rootElement;

    };

    afterEach(function afterEach() {

        // Styles.
        expect(inputElement.style.position).toEqual('absolute');
        expect(inputElement.style.opacity).toEqual('0.0001');
        expect(inputElement.style.pointerEvents).toEqual('none');

        // Attributes.
        expect(rootElement.getAttribute('accept')).toBeNull();
        expect(rootElement.getAttribute('multiple')).toBeNull();
        expect(rootElement.getAttribute('required')).toBeNull();

    });

    it('Should be able to create an upload button with "multiple";', function() {

        createElement([
            { name: 'multiple', value: true }
        ]);

        expect(inputElement.getAttribute('accept')).toEqual('*');
        expect(inputElement.getAttribute('required')).toBeNull();
        expect(inputElement.getAttribute('multiple')).toEqual('true');

    });

    it('Should be able to create an upload button with "required";', function() {

        createElement([
            { name: 'required', value: true }
        ]);

        expect(inputElement.getAttribute('accept')).toEqual('*');
        expect(inputElement.getAttribute('required')).toEqual('true');
        expect(inputElement.getAttribute('multiple')).toBeNull();

    });

});