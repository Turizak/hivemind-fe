// SPDX-License-Identifier: Apache-2.0

import { TPassValidation } from "../../types";

function validatePassword(password: string): TPassValidation {
  const passValidation: TPassValidation = {
    input: "password",
    minLength: {
      isValid: false,
      errorMsg: " 12 characters",
    },
    upper: {
      isValid: false,
      errorMsg: " 1 uppercase character",
    },
    lower: {
      isValid: false,
      errorMsg: " 1 lowercase character",
    },
    number: {
      isValid: false,
      errorMsg: " 1 number",
    },
    special: {
      isValid: false,
      errorMsg: " 1 special character",
    },
  };

  if (password.length >= 12) {
    passValidation.minLength.isValid = true;
  }
  if (password.match(/[A-Z]/)) {
    passValidation.upper.isValid = true;
  }
  if (password.match(/[a-z]/)) {
    passValidation.lower.isValid = true;
  }
  if (password.match(/[0-9]/)) {
    passValidation.number.isValid = true;
  }
  if (password.match(/[^A-Za-z0-9]/)) {
    passValidation.special.isValid = true;
  }

  return passValidation;
}

export default validatePassword;
