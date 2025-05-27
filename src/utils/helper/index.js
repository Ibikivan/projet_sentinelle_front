
/**
 * @function toBoolean
 * @param {string} string 
 * @param {boolean} value 
 * @returns {boolean}
 * Converts a string to a boolean value based on the provided value.
 */
export function toBoolean(string, value) {
    if (value) {
        return String(string)?.toLowerCase() === "true"
    } else {
        return String(string)?.toLowerCase() !== "false"
    }
}
