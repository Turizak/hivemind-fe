import {TEmailValidation } from "../../types"

function validateEmail(email: string): TEmailValidation {
    const emailValidation: TEmailValidation = {
        input: "email",
        minLength: {
            isValid: false,
            errorMsg: " email cannot be blank",
        },
        format: {
            isValid: false,
            errorMsg: " invalid email address"
        },
    }

    if (email.length >= 1 ) {
        emailValidation.minLength.isValid = true;
    }
    if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailValidation.format.isValid = true;
    }
    return emailValidation
}

export default validateEmail