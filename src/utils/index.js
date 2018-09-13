export const withTimeout = () => {
  let timeout
  return (func, time = 80) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(func, time)
  }
}
