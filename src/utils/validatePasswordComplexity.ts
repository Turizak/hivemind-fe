export function validatePasswordComplexity(password: string): boolean {
  let hasMinLen = false;
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;

  if (password.length >= 12) {
    hasMinLen = true;
  }
  if (password.match(/[A-Z]/)) {
    hasUpper = true;
  }
  if (password.match(/[a-z]/)) {
    hasLower = true;
  }
  if (password.match(/[0-9]/)) {
    hasNumber = true;
  }
  if (password.match(/[^A-Za-z0-9]/)) {
    hasSpecial = true;
  }
  return hasMinLen && hasUpper && hasLower && hasNumber && hasSpecial;
}

export const invalidPasswordMessage =
  "Password must be at least 12 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
