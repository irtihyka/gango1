export function validateCardNumber(cardNumber) {
    const regex = /^[0-9]{16}$/;
    return regex.test(cardNumber);
}

export function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return regex.test(expiryDate);
}

export function validateCVV(cvv) {
    const regex = /^[0-9]{3,4}$/;
    return regex.test(cvv);
}