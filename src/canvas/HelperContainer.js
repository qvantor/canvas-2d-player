import { fabric } from 'fabric'

export default class HelperContainer {
  constructor () {
    this.helpCanvas = new fabric.Canvas(document.getElementById('help-canvas'), {
      containerClass: 'helper-canvas',
      selection: false
    })
    fabric.util.setStyle(this.helpCanvas.wrapperEl, { position: 'absolute' })
  }

  helperToFront = () => fabric.util.setStyle(this.helpCanvas.wrapperEl, { 'z-index': '1' })
  helperToBack = () => fabric.util.setStyle(this.helpCanvas.wrapperEl, { 'z-index': '-1' })

  setSize ({ width, height }) {
    this.helpCanvas.setWidth(width)
    this.helpCanvas.setHeight(height)
    this.helpCanvas.calcOffset()
  }
}
