class CreditCardForm {
    constructor() {
        this.form = document.createElement('form');
        this.cardNumberInput = this.createInput('Card Number', 'text', 'cardNumber');
        this.expiryDateInput = this.createInput('Expiry Date (MM/YY)', 'text', 'expiryDate');
        this.cvvInput = this.createInput('CVV', 'text', 'cvv');
        this.submitButton = this.createSubmitButton();
        
        this.form.appendChild(this.cardNumberInput);
        this.form.appendChild(this.expiryDateInput);
        this.form.appendChild(this.cvvInput);
        this.form.appendChild(this.submitButton);
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    createInput(labelText, type, name) {
        const label = document.createElement('label');
        label.textContent = labelText;
        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.required = true;
        const container = document.createElement('div');
        container.appendChild(label);
        container.appendChild(input);
        return container;
    }

    createSubmitButton() {
        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Submit';
        return button;
    }

    handleSubmit(event) {
        event.preventDefault();
        const cardNumber = this.cardNumberInput.querySelector('input').value;
        const expiryDate = this.expiryDateInput.querySelector('input').value;
        const cvv = this.cvvInput.querySelector('input').value;

        // Here you would typically validate the inputs and send them to the server
        console.log('Card Number:', cardNumber);
        console.log('Expiry Date:', expiryDate);
        console.log('CVV:', cvv);
    }

    render() {
        return this.form;
    }
}

export default CreditCardForm;