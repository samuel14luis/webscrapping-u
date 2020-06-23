const puppeteer = require('puppeteer');

var username = process.argv[2];
var password = process.argv[3];

async function main() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	console.log('navegador abierto');
	await page.goto('https://intranet.unjfsc.edu.pe', { waitUntil: 'networkidle0' }); // wait until page load
	console.log('dentro de intranet');
	await page.type('#txtUsuario', username);
	await page.type('#txtContrasenia', password);
	// click and wait for navigation
	await Promise.all([
	          page.click('#btnIniciarSesion'),
	          page.waitForNavigation({ waitUntil: 'networkidle0' }),
	]);

	const html = await page.content();
	console.log(html);
}

main();