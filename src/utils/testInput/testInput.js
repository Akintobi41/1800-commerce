export function specialChars(val) {
    return (/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/).test(val)
}
export function hasNumber(val) {
    return /\d/.test(val);
}