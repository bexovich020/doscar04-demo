const {chromium}=require('playwright');
const fs=require('node:fs/promises');
const path=require('node:path');
const assert=require('node:assert/strict');
const base=process.env.QA_BASE_URL || 'http://127.0.0.1:3006';
const dest=path.resolve('research/qa');
(async()=>{
 await fs.mkdir(dest,{recursive:true});
 const browser=await chromium.launch({headless:true,executablePath:process.env.QA_BROWSER_PATH || undefined});
 const report={url:base,viewports:[],interactions:[],errors:[],failedRequests:[]};
 const context=await browser.newContext({viewport:{width:1440,height:900},reducedMotion:'no-preference'});
 const page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')report.errors.push(m.text())});
 page.on('requestfailed',r=>report.failedRequests.push({url:r.url(),error:r.failure()?.errorText}));
 async function fit(width,height){await page.setViewportSize({width,height});await page.goto(base,{waitUntil:'networkidle'});await page.waitForTimeout(1100);const dimensions=await page.evaluate(()=>({width:innerWidth,client:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));assert.ok(dimensions.scroll<=dimensions.client,`overflow at ${width}`);assert.equal(await page.locator('h1').count(),1); const cta=await page.getByRole('link',{name:'Записаться в WhatsApp',exact:true}).first().boundingBox();assert.ok(cta.y+cta.height<height,`hero CTA below viewport at ${width}`);report.viewports.push({...dimensions,height});await page.screenshot({path:path.join(dest,`hero-${width}.png`)});}
 for(const [w,h] of [[1440,900],[1920,1080],[1280,800],[768,1024],[390,844],[375,812],[320,740]])await fit(w,h);
 await page.setViewportSize({width:1440,height:900});await page.goto(base,{waitUntil:'networkidle'});
 for(const id of ['services','work','reviews','contact']){await page.locator(`#${id}`).scrollIntoViewIfNeeded();await page.waitForTimeout(700);await page.screenshot({path:path.join(dest,`${id}-desktop.png`)});}
 for(let i=0;i<6;i++){const trigger=page.locator(`#service-trigger-${i}`);await trigger.click();if(await trigger.getAttribute('aria-expanded')==='false')await trigger.click();assert.equal(await trigger.getAttribute('aria-expanded'),'true');await page.locator(`#service-content-${i}`).waitFor({state:'visible'});const href=await page.locator(`#service-content-${i} a`).getAttribute('href');assert.ok(href.startsWith('https://wa.me/77082196485?text='));assert.ok(decodeURIComponent(href).includes('Автомобиль:'));await trigger.click();assert.equal(await trigger.getAttribute('aria-expanded'),'false');}
 report.interactions.push('All 6 service panels open/close and contain the correct WhatsApp number and service message');
 await page.getByRole('button',{name:'Открыть фото: Внимание к поверхности'}).click();await page.locator('.photo-dialog').waitFor({state:'visible'});await page.screenshot({path:path.join(dest,'gallery-dialog.png')});await page.keyboard.press('Escape');assert.equal(await page.locator('.photo-dialog').isVisible(),false);
 for(const name of ['Внутри DOSCAR04','Автомобили в сервисе']){await page.getByRole('button',{name:`Открыть фото: ${name}`}).click();await page.getByRole('button',{name:'Закрыть фотографию'}).click();}
 report.interactions.push('All 3 gallery images open and close; Escape closes the image dialog');
 await page.goto(base,{waitUntil:'networkidle'});for(const [name,id] of [['Услуги','services'],['В сервисе','work'],['Репутация','reviews'],['Контакты','contact']]){await page.getByRole('link',{name,exact:true}).first().click();await page.waitForTimeout(600);assert.equal(new URL(page.url()).hash,`#${id}`);}
 const hrefs=await page.locator('a').evaluateAll(els=>els.map(a=>a.getAttribute('href')));assert.ok(hrefs.every(h=>h&&(/^(https:\/\/|tel:|#)/).test(h)));assert.ok(hrefs.filter(h=>h.startsWith('tel:')).every(h=>h==='tel:+77082196485'));
 report.interactions.push('Desktop navigation and every contact href use valid targets');
 await page.setViewportSize({width:390,height:844});await page.goto(base,{waitUntil:'networkidle'});await page.getByRole('button',{name:'Открыть меню'}).click();await page.locator('.mobile-menu').waitFor({state:'visible'});await page.screenshot({path:path.join(dest,'mobile-menu.png')});await page.keyboard.press('Escape');assert.equal(await page.locator('.mobile-menu').isVisible(),false);assert.equal(await page.getByRole('button',{name:'Открыть меню'}).evaluate(el=>el===document.activeElement),true);assert.equal(await page.locator('.mobile-contact-bar').isVisible(),true);await page.getByRole('button',{name:'Открыть меню'}).click();await page.getByRole('navigation',{name:'Мобильная навигация'}).getByRole('link',{name:'Контакты'}).click();assert.equal(await page.locator('.mobile-menu').isVisible(),false);assert.equal(new URL(page.url()).hash,'#contact');
 report.interactions.push('Mobile menu opens, closes with Escape, navigates and returns focus; sticky call/WhatsApp bar visible');
 for(const id of ['services','work','reviews','contact']){await page.locator(`#${id}`).scrollIntoViewIfNeeded();await page.waitForTimeout(700);await page.screenshot({path:path.join(dest,`${id}-mobile.png`)});}
 const images=await page.locator('img').evaluateAll(els=>els.filter(i=>i.closest('dialog')===null).map(i=>({alt:i.alt,width:i.naturalWidth,complete:i.complete})));assert.ok(images.every(i=>i.width>0&&i.complete));report.images=images;
 const map=page.frames().find(f=>f.url().includes('openstreetmap.org'));report.mapLoaded=!!map;assert.ok(report.mapLoaded);
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base,{waitUntil:'networkidle'});report.reducedMotion=await page.locator('.hero-image').evaluate(el=>getComputedStyle(el).transform);assert.equal(report.reducedMotion,'none');
 report.interactions.push('Reduced-motion hero stays static and content remains visible');
 await fs.writeFile(path.join(dest,'report.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify(report,null,2));await browser.close();
 if(report.errors.length||report.failedRequests.some(r=>r.error!=='net::ERR_ABORTED'))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
