describe('UploadButton', function() {

    var uploadButton, inputElement, rootElement;

    /**
     * @method createElement
     * @param [attributes=[]] {Array}
     * @return {Object}
     */
    var createElement = function createElement(attributes) {

        rootElement = document.createElement('button');
        rootElement.setAttribute('is', 'upload-button');
        rootElement.setAttribute('custom-attr', 'yes');

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

        // Attributes that are relayed onto the INPUT element.
        expect(rootElement.getAttribute('accept')).toBeNull();
        expect(rootElement.getAttribute('accept')).toBeNull();
        expect(rootElement.getAttribute('autofocus')).toBeNull();
        expect(rootElement.getAttribute('disabled')).toBeNull();
        expect(rootElement.getAttribute('form')).toBeNull();
        expect(rootElement.getAttribute('multiple')).toBeNull();
        expect(rootElement.getAttribute('name')).toBeNull();
        expect(rootElement.getAttribute('required')).toBeNull();
        expect(rootElement.getAttribute('data-accept')).toBeNull();

        // Custom attributes that the INPUT doesn't inherit will not be removed.
        expect(rootElement.getAttribute('custom-attr')).toEqual('yes');

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

        expect(inputElement.getAttribute('required')).toEqual('true');
        expect(inputElement.getAttribute('multiple')).toBeNull();

    });

    it('Should be able to create an upload button with "name", "accept" and "multiple";', function() {

        createElement([
            { name: 'accept',   value: '*jpg,*.png,*.gif' },
            { name: 'required', value: true },
            { name: 'multiple', value: 'multiple' }
        ]);

        expect(inputElement.getAttribute('accept')).toEqual('*jpg,*.png,*.gif');
        expect(inputElement.getAttribute('required')).toEqual('true');
        expect(inputElement.getAttribute('multiple')).toEqual('multiple');

    });

    it('Should be able to support using the "data" attributes too;', function() {

        createElement([
            { name: 'data-accept', value: '*jpg,*.png,*.gif' }
        ]);

        expect(inputElement.getAttribute('accept')).toEqual('*jpg,*.png,*.gif');

    });

});