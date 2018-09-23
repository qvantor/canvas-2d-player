let timeout
export const withTimeout = (func, time = 80) => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = undefined
  }
  timeout = setTimeout(func, time)
}

export const round = (num, div = 30) => Math.floor(num / div) * div
