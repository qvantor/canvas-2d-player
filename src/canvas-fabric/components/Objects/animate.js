export const calcParams = (keyframes, frame) => {
  const calculated = {}
  for (let key in keyframes) {
    const value = keyframes[key]
    if (value.keys.length === 0) continue
    const secondFrame = value.keys.find(item => item[0] >= frame)
    const firstFrameIndex = value.keys.indexOf(secondFrame) - 1

    if (value.keys[firstFrameIndex]) {
      const firstFrame = value.keys[firstFrameIndex]

      const frameDelta = frame - firstFrame[0]
      const diff = secondFrame[0] - firstFrame[0]

      const valDiff = secondFrame[1] - firstFrame[1]
      calculated[key] = firstFrame[1] + (valDiff * (frameDelta / diff))
    } else {
      const firstFrame = value.keys[0]
      const lastFrame = value.keys[value.keys.length - 1]
      calculated[key] = firstFrame[0] >= frame ? firstFrame[1] : lastFrame[1]
    }
  }
  return calculated
}
