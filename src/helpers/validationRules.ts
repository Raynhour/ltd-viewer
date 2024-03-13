const required = (value: String) => !!value || 'Required.'
const min = (min: number) => (value: String) => (value && value.length >= min) || `Must be at least ${min} characters.`
const max = (max: number) => (value: String) => (value && value.length <= max) || `Must be at most ${max} characters.`

export {
    required,
    min,
    max
}
