import createInstance from '../createInstance'

export default (maskProps) => {
  const mask = createInstance('group', maskProps)
  mask.type = 'mask'
  maskProps.children.forEach(item => mask.addWithUpdate(createInstance(item.type, item)))

  mask.set(maskProps.params)
  return mask
}
