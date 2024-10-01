export function specialChars(val:string) {
    return (/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]/).test(val)
}
export function hasNumber(val:string) {
    return /\d/.test(val);
}