/**
 * Executes all startup callbacks
 * @param  { ...(() => any) } callbacks
 */
export const executeStartup = (...callbacks) => {
  callbacks.map((callback) => callback())
}
