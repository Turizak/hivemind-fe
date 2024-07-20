import {TTitleValidation } from "../../types"

function validateTitle(title: string): TTitleValidation {
    const titleValidation: TTitleValidation = {
        input: "contentTitle",
        minLength: {
            isValid: false,
            errorMsg: " title cannot be blank",
        },
        maxLength: {
            isValid: false,
            errorMsg: " title cannot be more than 256 characters"
        },
    }

    if (title.length >= 1 ) {
        titleValidation.minLength.isValid = true;
    }
    if (title.length <= 256 ) {
        titleValidation.maxLength.isValid = true;
    }
    return titleValidation
}

export default validateTitle