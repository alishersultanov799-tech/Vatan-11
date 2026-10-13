@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo ================================================================
echo    VATAN - "YANGI QO'YLIQ-2" TELEGRAM AI BOTI (@Vatan2333_bot)
echo ================================================================
echo.
echo 🤖 Bot ishga tushirilmoqda...
echo Telegramda @Vatan2333_bot ga kirib /start yoki savol yozishingiz mumkin!
echo.
node scripts/run-local-bot.js
pause
