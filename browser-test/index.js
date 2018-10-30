const puppeteer = require('puppeteer')
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  })
  const page = await browser.newPage()
  const bench = fs.readFileSync('./benchmark.json', 'utf8')
  await page.goto('http://localhost:1234')

  await page.evaluate((bench) => window.localStorage.setItem('redux', bench), bench)
  await page.reload({ waitUntil: 'networkidle0' })
  await page.click('.anticon-play-circle-o')

  const result = await page.evaluate(async () => {
    const r = await new Promise((resolve) => {
      const decimalPlaces = 2
      const updatePeriod = 1
      const decimalPlacesRatio = Math.pow(10, decimalPlaces)
      const result = []
      let timeMeasurements = []
      let fps = 0

      const tick = function () {
        timeMeasurements.push(window.performance.now())

        const msPassed = timeMeasurements[timeMeasurements.length - 1] - timeMeasurements[0]

        if (msPassed >= updatePeriod * 1000) {
          fps = Math.round(timeMeasurements.length / msPassed * 1000 * decimalPlacesRatio) / decimalPlacesRatio
          result.push(fps)
          timeMeasurements = []
        }

        if (result.length === 10) resolve(result)

        window.requestAnimationFrame(tick)
      }

      tick()
    })
    return r
  })

  console.log(result)

  await browser.close()
})()
