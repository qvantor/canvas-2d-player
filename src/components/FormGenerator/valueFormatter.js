export const numStandard = {
  formatter: val => val,
  parser: val => val
}

export const numPercents = {
  formatter: val => `${Number(val * 100).toFixed(0)}%`,
  parser: val => Number(val.replace('%', '')) / 100
}
