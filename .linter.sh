#!/bin/bash
cd /home/kavia/workspace/code-generation/heritagebites-24534-7633cc73/heritage_bites
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

