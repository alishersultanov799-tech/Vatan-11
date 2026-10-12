@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo ================================================================
echo    VATAN QURILISH KOMPANIYASI - "YANGI QO'YLIQ-2" SAYTI
echo ================================================================
echo.
echo Sayt brauzerda ochilmoqda...
start http://localhost:4173/
npm run preview -- --port 4173
pause
