const readline = require('readline-sync');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

console.log("==================================================");
console.log("   Automated Multi-View & Watch-Time Generator   ");
console.log("==================================================");

const VIDEO_URL = readline.question('\n[?] Video Link paste korun: ');

if (!VIDEO_URL || !VIDEO_URL.startsWith('http')) {
    console.log("[-] Error: Sothik Video Link din!");
    process.exit(1);
}

const CONCURRENT_VIEWS = 3;  
const WATCH_TIME_MS = 20000;

async function runSingleView(botId) {
    const browser = await puppeteer.launch({
        executablePath: '/data/data/com.termux/files/usr/bin/chromium-browser',
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--mute-audio',
            '--autoplay-policy=no-user-gesture-required'
        ]
    });

    const page = await browser.newPage();
    try {
        await page.setUserAgent('Mozilla/5.0 (Linux; Android 13; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36');
        
        await page.goto(VIDEO_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
        console.log(`[+] [Bot #${botId}] Link Loaded. Play time count hocche...`);
        
        await new Promise(resolve => setTimeout(resolve, WATCH_TIME_MS));
        console.log(`[✓] [Bot #${botId}] Watch-time added successfully!`);
    } catch (err) {
        console.log(`[-] [Bot #${botId}] Error: ${err.message}`);
    } finally {
        await browser.close();
    }
}

async function startLoop() {
    let cycle = 1;
    console.log(`\n[+] Video URL Set: ${VIDEO_URL}`);
    console.log(`[+] Target: ${CONCURRENT_VIEWS} Parallel Views per Cycle.`);
    console.log("--------------------------------------------------");

    while (true) {
        console.log(`\n---> [Cycle #${cycle}] Multi-View loop active...`);
        const tasks = [];
        for (let i = 1; i <= CONCURRENT_VIEWS; i++) {
            tasks.push(runSingleView(i));
        }
        await Promise.all(tasks);
        console.log(`[✓] Cycle #${cycle} finished. Restarting next batch...`);
        cycle++;
    }
}

startLoop();