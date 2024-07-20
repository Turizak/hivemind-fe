import {THiveValidation } from "../../types"

function validateHive(hive: string): THiveValidation {
    const hiveValidation: THiveValidation = {
        input: "hiveName",
        minLength: {
            isValid: false,
            errorMsg: " cannot be blank",
        },
        maxLength: {
            isValid: false,
            errorMsg: " cannot be more than 30 characters"
        },
        format: {
            isValid: false,
            errorMsg: " can only contain alphabetic characters (A-Z, a-z)"
        },
    }

    if (hive.length >= 1 ) {
        hiveValidation.minLength.isValid = true;
    }
    if (hive.length <= 30 ) {
        hiveValidation.maxLength.isValid = true;
    }
    if (hive.match(/^[a-zA-Z]+$/) ) {
        hiveValidation.format.isValid = true;
    }
    return hiveValidation
}

export default validateHive