const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle0' });
  
  // Wait a bit for any animations
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({ path: '/home/hilsamathi/.openclaw/workspace/agentforyou/screenshot.png', fullPage: true });
  
  console.log('Screenshot saved!');
  await browser.close();
})();