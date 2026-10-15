@echo off
chcp 65001 > nul
cd /d "%~dp0"
set NODE_TLS_REJECT_UNAUTHORIZED=0

echo ================================================================
echo    VATAN - "YANGI QO'YLIQ-2" TELEGRAM AI BOTI (@Vatan2333_bot)
echo ================================================================
echo.
echo 🤖 Bot mahalliy rejimda ishga tushirilmoqda...
echo Telegramda @Vatan2333_bot ga kirib /start yoki savol yozishingiz mumkin!
echo.
echo [Eslatma]: Oynani yopganingizda yoki to'xtatganingizda bot 24/7
echo ishlaydigan bulutli (Vercel) rejimiga avtomatik o'tkaziladi.
echo.

node scripts/run-local-bot.js

echo.
echo 🔄 24/7 bulutli webhook tiklanmoqda...
node scripts/setup-webhook.js set
echo.
pause

