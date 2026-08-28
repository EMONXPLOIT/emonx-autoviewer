<div align="center">

# 💀 EMONX AUTO-VIEWER V1.0 💀

## ⚡ MULTI-PLATFORM AUTO VIEW & WATCH-TIME ENGINE ⚡

![DEVELOPER](https://img.shields.io/badge/DEVELOPER-EMON%20KHAN-00FF66?style=for-the-badge&logo=github)
![SYSTEM STATUS](https://img.shields.io/badge/SYSTEM%20STATUS-ONLINE-00E5FF?style=for-the-badge)
![NODE.JS](https://img.shields.io/badge/NODE.JS-v18%2B-339933?style=for-the-badge&logo=nodedotjs)

### **Automated Browser Instance & Multi-Stream Generator for Termux**
*Specially Built & Maintained by Master Emon Khan (EMONXPLOIT)*

</div>

---

## 📑 OVERVIEW

**EMONX AUTO-VIEWER V1.0** হলো একটি Node.js ও Puppeteer ভিত্তিক অটোমেশন ইঞ্জিন, যা টার্মাক্স (Termux) এবং অ্যান্ড্রয়েড ডিভাইসে ব্যাকগ্রাউন্ডে চালানোর জন্য তৈরি করা হয়েছে। এটি Headless Chromium ব্রাউজারের ৩টি কন্টিনিউয়াস ইনস্ট্যান্স চালু করে স্বয়ংক্রিয়ভাবে YouTube, TikTok এবং Facebook ভিডিও লোড করে এবং ওয়াচ-টাইম যোগ করতে থাকে। স্টিলথ প্লাগইন ব্যবহার করার ফলে ব্রাউজার প্রসেসগুলো বোট-ডিটেকশন এড়িয়ে আসল ইউজারের মতো কাজ করে।

---

## ⚡ CORE FEATURES

* 🎯 **Multi-Platform Menu:** টার্মিনালে ১, ২, ৩ ও ৪ চেপে সহজে YouTube, TikTok, Facebook বা অন্য যেকোনো প্ল্যাটফর্ম বেছে নেওয়ার সুবিধা।
* 🥷 **Puppeteer Stealth Bypass:** ব্রাউজার অটোমেশন ফ্ল্যাগ ও বট-ডিটেকশন ব্লক এড়াতে `puppeteer-extra-plugin-stealth` এর ব্যবহার।
* 🔄 **Parallel Instance Loop:** একসাথে ৩টি ব্যাকগ্রাউন্ড ব্রাউজার ফ্রেমে ভিডিও প্লে করে দ্রুত ভিউ এবং ওয়াচ-টাইম যোগ করার লজিক।
* 📱 **Android UA Emulation:** প্ল্যাটফর্মগুলোকে আসল মোবাইল ভিজিটর হিসেবে দেখাতে হাই-এন্ড অ্যান্ড্রয়েড ব্রাউজার User-Agent সিমুলেশন।
* ⚡ **RAM Optimized:** অ্যান্ড্রয়েড ডিভাইসের মেমোরি সেফ রাখতে সীমিত ও নিয়ন্ত্রিত হেডলেস রিসোর্স ব্যবহার।
* 🚀 **Background Execution:** `termux-wake-lock` ব্যবহার করে ফোন লক বা অ্যাপ মিনিমাইজ থাকলেও অবিরাম কাজ করার সুব্যবস্থা।

---

## 🛠️ INSTALLATION & RUN COMMANDS

Termux-এ প্রজেক্টটি ক্লোন করে চালানোর জন্য নিচের কমান্ডগুলো এক এক করে ব্যবহার করুন:

```bash
# ১. প্রয়োজনীয় টুলস ও ব্রাউজার ইনস্টল
pkg update && pkg upgrade -y
pkg install git nodejs chromium -y

# ২. প্রজেক্ট ক্লোন ও ফোল্ডারে প্রবেশ
git clone [https://github.com/EMONXPLOIT/emonx-autoviewer.git](https://github.com/EMONXPLOIT/emonx-autoviewer.git)
cd emonx-autoviewer

# ৩. অটোমেশন লাইব্রেরি ইনস্টল
npm install

# ৪. ব্যাকগ্রাউন্ড মোড অন ও রান
termux-wake-lock
node auto_viewer.js