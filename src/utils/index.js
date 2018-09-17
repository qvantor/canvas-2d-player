let timeout
export const withTimeout = (func, time = 80) => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = undefined
  }
  timeout = setTimeout(func, time)
}
