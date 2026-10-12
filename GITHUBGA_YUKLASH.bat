@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo ================================================================
echo    VATAN LOYIHASINI GITHUBGA YUKLASH (PUSH)
echo    Repo: https://github.com/alishersultanov799-tech/Vatan-11
echo ================================================================
echo.
echo GitHub serveriga kod yuborilmoqda...
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ================================================================
    echo [MUVAFFAQINATLI] Kodlar GitHub'ga muvaffaqiyatli yuklandi!
    echo Havola: https://github.com/alishersultanov799-tech/Vatan-11
    echo ================================================================
) else (
    echo ================================================================
    echo [DIQQAT] Xatolik yuz berdi. Iltimos, GitHub login/parolingizni
    echo yoki Personal Access Token'ni tekshiring.
    echo ================================================================
)
pause
