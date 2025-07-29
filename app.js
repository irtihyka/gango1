const CreditCardForm = require('./components/CreditCardForm');
const validation = require('./utils/validation');

document.addEventListener('DOMContentLoaded', () => {
    const creditCardForm = new CreditCardForm();
    creditCardForm.render();

    const formElement = document.getElementById('credit-card-form');
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const cardNumber = formElement.cardNumber.value;
        const expiryDate = formElement.expiryDate.value;
        const cvv = formElement.cvv.value;

        if (validation.validateCardNumber(cardNumber) && 
            validation.validateExpiryDate(expiryDate) && 
            validation.validateCVV(cvv)) {
            // Process the payment
            alert('Payment processed successfully!');
        } else {
            alert('Please check your credit card information and try again.');
        }
    });
});