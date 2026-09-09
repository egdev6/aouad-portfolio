// On WSL, reuse Puppeteer's debugging port to avoid chrome-launcher's broken temp-profile path.
module.exports = async function lighthousePuppeteer() {};
