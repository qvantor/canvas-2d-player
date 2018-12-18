const puppeteer = require('puppeteer')
const fs = require('fs')
const bigrig = require('bigrig')

const bench = async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  })
  const page = await browser.newPage()
  const bench = fs.readFileSync('../src/assets/demo.json', 'utf8')
  await page.goto('http://localhost:8080')
  const client = await page.target().createCDPSession()

  await page.evaluate((bench) => window.localStorage.setItem('redux', bench), bench)
  await page.reload({ waitUntil: 'domcontentloaded' })
  await page.waitFor(2000)
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 })
  await page.tracing.start({ path: 'trace.json' }, false, ['toplevel'])
  await page.click('.play-button')
  await page.waitFor(5000)
  await page.click('.play-button')
  await page.waitFor(100)
  await page.tracing.stop()
  await browser.close()

  const trace = fs.readFileSync('trace.json', 'utf8')
  return bigrig.analyze(trace, { types: bigrig.ANIMATION })[0].fps
}

(async () => {
  const benchCount = 3
  const results = []
  for (let i = 0; i < benchCount; i++) {
    console.time(`Bench #${i} success`)
    results[i] = await bench().catch(e => console.log(`Bench #${i} failed`, e))
    console.timeEnd(`Bench #${i} success`)
  }
  console.log(results)
})()
