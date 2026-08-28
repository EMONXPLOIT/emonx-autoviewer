const readline = require('readline-sync');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

console.log("==================================================");
console.log("    EMONXPLOIT MULTI-PLATFORM AUTO VIEWER         ");
console.log("==================================================");

// ১. প্ল্যাটফর্ম সিলেক্ট করার মেনু
console.log("\nKon Platform er Video-te View Barate Chan?");
console.log("[1] YouTube");
console.log("[2] TikTok");
console.log("[3] Facebook");
console.log("[4] Custom / Other Platform");

const choice = readline.question('\n[?] Apnar Choice Type Korun (1/2/3/4): ');

let platformName = "";
if (choice === '1') platformName = "YouTube";
else if (choice === '2') platformName = "TikTok";
else if (choice === '3') platformName = "Facebook";
else if (choice === '4') platformName = "Custom Platform";
else {
    console.log("[-] Invalid choice! Program bondho hocche.");
    process.exit(1);
}

// ২. নির্বাচিত প্ল্যাটফর্মের ভিডিও লিংক নেওয়া
const VIDEO_URL = readline.question(`\n[?] Paste ${platformName} Video Link: `);

if (!VIDEO_URL || !VIDEO_URL.startsWith('http')) {
    console.log("[-] Error: Sothik Video Link Din!");
    process.exit(1);
}

// ৩. অটোমেশন কনফিগারেশন
const CONCURRENT_VIEWS = 3;  // একসাথে ৩টি ব্রাউজার চলবে (RAM সেফ রাখার জন্য)
const WATCH_TIME_MS = 25000; // ২৫ সেকেন্ড প্লে হবে

async function runSingleView(botId) {
    const browser = await puppeteer.launch({
        executablePath: '/data/data/com.termux/files/usr/bin/chromium-browser',
        headless: true, // ব্যাকগ্রাউন্ডে চলবে
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--mute-audio',
            '--autoplay-policy=no-user-gesture-required'
        ]
    });

    const page = await browser.newPage();
    try {
        // রিয়েল মোবাইল ইউজার-এজেন্ট সিমুলেট করা
        await page.setUserAgent('Mozilla/5.0 (Linux; Android 13; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36');
        
        await page.goto(VIDEO_URL, { waitUntil: 'domcontentloaded', timeout: 35000 });
        console.log(`[+] [Bot #${botId}] [${platformName}] Video Loaded. Play Time Start...`);
        
        // ভিডিও নির্দিষ্ট সময় পর্যন্ত প্লে রাখা
        await new Promise(resolve => setTimeout(resolve, WATCH_TIME_MS));
        console.log(`[✓] [Bot #${botId}] [${platformName}] Watch-time added successfully!`);
    } catch (err) {
        console.log(`[-] [Bot #${botId}] Error: ${err.message}`);
    } finally {
        await browser.close();
    }
}

async function startLoop() {
    let cycle = 1;
    console.log(`\n==================================================`);
    console.log(`[+] Selected Platform: ${platformName}`);
    console.log(`[+] Target URL: ${VIDEO_URL}`);
    console.log(`[+] Target: ${CONCURRENT_VIEWS} Parallel Views per Cycle.`);
    console.log("==================================================");

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