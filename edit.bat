@echo off

set dir_Root=%~dp0
set dir_Root=%dir_Root:~0,-1%
set dir_HTML=%dir_Root%\html
set dir_JS=%dir_Root%\js
set dir_CSS=%dir_Root%\css
set dir_Notes=%dir_Root%\notes

REM "%dir_Root%\
REM "%dir_HTML%\
REM "%dir_JS%\
REM "%dir_CSS%\
REM "%dir_Notes%\

start "" "%programFiles(x86)%\Notepad++\notepad++.exe" "%dir_Root%\manifest.json" "%dir_HTML%\default.html""%dir_CSS%\global.css" "%dir_CSS%\save.css" "%dir_CSS%\options.css" "%dir_CSS%\info.css" "%dir_JS%\global.js" "%dir_JS%\save.js" "%dir_JS%\options.js" "%dir_JS%\info.js" "%dir_Notes%\To Do.txt" "%dir_Notes%\Versions.txt"

exit