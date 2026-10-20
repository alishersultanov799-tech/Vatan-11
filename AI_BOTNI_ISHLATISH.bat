@echo off
chcp 65001 > nul
cd /d "%~dp0"
set NODE_TLS_REJECT_UNAUTHORIZED=0

echo 🔍 Bot va Webhook aloqasi tekshirilmoqda...
node scripts/bot-helper.js auto-heal
timeout /t 1 > nul

:MENU
cls
echo ================================================================
echo    VATAN - "YANGI QO'YLIQ-2" TELEGRAM BOTI (@Vatan2333_bot)
echo ================================================================
echo 🟢 TIZIM HOLATI: 24/7 Bulutli rejim faol (Vercel Cloud)!
echo 💡 Bot kompyuter o'chiq bo'lsa ham 24 soat uzluksiz ishlaydi.
echo ================================================================
echo.
echo   [1] 🚀 24/7 BULUTLI REJIMNI QAYTA YOQISH (Tavsiya etiladi)
echo       - Webhookni qayta ulaydi va barcha aloqani tekshiradi.
echo.
echo   [2] 🔍 BOT VA WEBHOOK HOLATINI TEKSHIRISH
echo       - Botning hozirgi holati va xabarlar oqimini ko'rish.
echo.
echo   [3] 📨 TELEGRAMGA TEST XABAR YUBORISH (Aloqa tekshiruvi)
echo       - Menejer Telegramiga sinov xabari yuborish.
echo.
echo   [4] 💻 TEST/DASTURCHI REJIMI (Kompyuterda jonli kuzatish)
echo       - Faqat terminalda sinov uchun (to'xtatganda 24/7 rejim tiklanadi).
echo.
echo   [5] ❌ Chiqish
echo.
echo ================================================================
set /p opt="Tanlovingizni kiriting [1-5]: "

if "%opt%"=="1" goto SET_WEBHOOK
if "%opt%"=="2" goto CHECK_STATUS
if "%opt%"=="3" goto TEST_MSG
if "%opt%"=="4" goto RUN_LOCAL
if "%opt%"=="5" exit /b
goto MENU

:SET_WEBHOOK
cls
echo ================================================================
echo    24/7 BULUTLI REJIM FAOLLASHTIRILMOQDA...
echo ================================================================
echo.
node scripts/bot-helper.js set-webhook
echo.
echo ================================================================
pause
goto MENU

:RUN_LOCAL
cls
echo ================================================================
echo    KOMPYUTERDA JONLI BOT REJIMI ISHGA TUSHMOQDA...
echo ================================================================
echo.
echo ⚠️  Eslatma: Jonli rejimni to'xtatish uchun klaviaturada Ctrl+C bosing.
echo    To'xtatilganda 24/7 bulutli webhook avtomatik qayta tiklanadi!
echo.
node scripts/run-local-bot.js
echo.
echo 🔄 24/7 bulutli webhook tiklanmoqda...
node scripts/bot-helper.js set-webhook
echo.
pause
goto MENU

:CHECK_STATUS
cls
echo ================================================================
echo    BOT HOLATINI TEKSHIRISH
echo ================================================================
echo.
node scripts/bot-helper.js status
echo.
echo ================================================================
pause
goto MENU

:TEST_MSG
cls
echo ================================================================
echo    TELEGRAMGA TEST XABAR YUBORISH
echo ================================================================
echo.
node scripts/bot-helper.js test-message
echo.
echo ================================================================
pause
goto MENU
