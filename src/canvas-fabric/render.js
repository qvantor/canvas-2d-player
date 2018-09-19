import ReactReconciler from 'react-reconciler'
import createInstance from './core/createInstance'
import { createCanvas, canvas } from './core/container'

const rootHostContext = {}
const childHostContext = {}

const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {
    return childHostContext
  },
  shouldSetTextContent: (type, props) => {
    return typeof props.children === 'string' || typeof props.children === 'number'
  },
  createInstance: (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) => {
    return createInstance(type, newProps)
  },
  createTextInstance: text => {
  },
  appendInitialChild: (parent, child) => {
    if (parent.addWithUpdate) parent.addWithUpdate(child)
    else if (parent.add) parent.add(child)
    else throw Error('This element can\'t contain child')
  },
  appendChild (parent, child) {
    if (parent.type === 'group') parent.addWithUpdate(child)
    else canvas.add(child)
  },
  finalizeInitialChildren: (domElement, type, props) => {},
  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    const canvas = createCanvas(parent)
    child.forEachObject(item => canvas.add(item))
  },
  prepareUpdate (domElement, type, oldProps, newProps) {
    return newProps.params !== oldProps.params
  },
  commitUpdate (domElement, updatePayload, type, oldProps, newProps) {
    if (domElement.update) domElement.update(newProps, oldProps, type)
  },
  commitTextUpdate (textInstance, oldText, newText) {
  },
  removeChild (parent, child) {
    if (parent.type === 'group') parent.remove(child)
    else canvas.remove(child)
  }
}
const ReactReconcilerInst = ReactReconciler(hostConfig)
export default (reactElement, domElement, callback) => {
  // Create a root Container if it doesnt exist
  if (!domElement._rootContainer) {
    domElement._rootContainer = ReactReconcilerInst.createContainer(domElement, false)
  }

  // update the root Container
  return ReactReconcilerInst.updateContainer(reactElement, domElement._rootContainer, null, callback)
}
