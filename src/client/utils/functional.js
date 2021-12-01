/**
 * Lifts a function
 * @param { (...args) => any } fn Function handler
 * @param  { ...any } args Arguments for the function
 * @returns { () => any } Lifted function
 */
export const lift = (fn, ...args) => {
  return () => fn(...args)
}
