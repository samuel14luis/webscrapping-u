
const puppeteer = require('puppeteer');

function getPromedioModulo(ec, ep, ed){
	return {ponderado:(ec*0.3 + ep*0.35 + ed*0.35)}//, promedio:((ec+ep+ed)/3)}
}

function getPM(m){
	return {ponderado:(m.ec*0.3 + m.ep*0.35 + m.ed*0.35)}
}

Math.round(10000*((3*14+4*13*3+3*14+2.5*16+2.5*14)/23))/10000

var username = process.argv[2];
var password = process.argv[3];

async function main() {
	const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
	await page.goto('http://intranet.unjfsc.edu.pe', { waitUntil: 'networkidle0' }); // wait until page load
	console.log('dentro de intranet');
	await page.type('#txtUsuario', username);
	await page.type('#txtContrasenia', password);
	// click and wait for navigation
	await Promise.all([
	          page.click('#btnIniciarSesion'),
	          page.waitForNavigation({ waitUntil: 'networkidle0' }),
	]);
	
	await page.goto('http://intranet.unjfsc.edu.pe/ZonaEstudiante/frmEvaluacionesParciales.aspx', { waitUntil: 'networkidle0' });

	let cursos = await page.evaluate(() => {
		const nombre_curso = [
			...document.querySelectorAll("[id$=_lblCursoCompet]")
		].map((nodoCurso) => nodoCurso.innerText)

		//MODULO 1
		const EC1 = [
			...document.querySelectorAll("[id$=_lblEC1]")
		].map((EC1) => EC1.innerText)

		const EP1 = [
			...document.querySelectorAll("[id$=_lblEP1]")
		].map((EP1) => EP1.innerText)

		const ED1 = [
			...document.querySelectorAll("[id$=_lblED1]")
		].map((ED1) => ED1.innerText)

		const PM1 = [
			...document.querySelectorAll("[id$=_lblPM1]")
		].map((PM1) => PM1.innerText)

		//MODULO 2
		const EC2 = [
			...document.querySelectorAll("[id$=_lblEC2]")
		].map((EC2) => EC2.innerText)

		const EP2 = [
			...document.querySelectorAll("[id$=_lblEP2]")
		].map((EP2) => EP2.innerText)

		const ED2 = [
			...document.querySelectorAll("[id$=_lblED2]")
		].map((ED2) => ED2.innerText)

		const PM2 = [
			...document.querySelectorAll("[id$=_lblPM2]")
		].map((PM2) => PM2.innerText)

		//MODULO 3
		const EC3 = [
			...document.querySelectorAll("[id$=_lblEC3]")
		].map((EC3) => EC3.innerText)

		const EP3 = [
			...document.querySelectorAll("[id$=_lblEP3]")
		].map((EP3) => EP3.innerText)

		const ED3 = [
			...document.querySelectorAll("[id$=_lblED3]")
		].map((ED3) => ED3.innerText)

		const PM3 = [
			...document.querySelectorAll("[id$=_lblPM3]")
		].map((PM3) => PM3.innerText)

		//MODULO 4
		const EC4 = [
			...document.querySelectorAll("[id$=_lblEC4]")
		].map((EC4) => EC4.innerText)

		const EP4 = [
			...document.querySelectorAll("[id$=_lblEP4]")
		].map((EP4) => EP4.innerText)

		const ED4 = [
			...document.querySelectorAll("[id$=_lblED4]")
		].map((ED4) => ED4.innerText)

		const PM4 = [
			...document.querySelectorAll("[id$=_lblPM4]")
		].map((PM4) => PM4.innerText)

		//PROMEDIO FINAL
		const PMF = [
			...document.querySelectorAll("[id$=_lblPMF]")
		].map((PMF) => PMF.innerText)

		return nombre_curso.map((nombre, i) => ({
			nombre,
			modulo: [{
				ec: EC1[i],
				ep: EP1[i],
				ed: ED1[i],
				pm: PM1[i]
			},
			{
				ec: EC2[i],
				ep: EP2[i],
				ed: ED2[i],
				pm: PM2[i]
			},
			{
				ec: EC3[i],
				ep: EP3[i],
				ed: ED3[i],
				pm: PM3[i]
			},
			{
				ec: EC4[i],
				ep: EP4[i],
				ed: ED4[i],
				pm: PM4[i]
			}],
			pmf: PMF[i]
		}))
	})

	console.log(cursos)
    //await browser.close();
}

main();