/**
 * Return a camelCase string to Kebab-Case string.
 * @param str camelCase string to be parsed
 * @returns Final Kebab-Case string
 */
export function camelToKebab(str: string): string {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
