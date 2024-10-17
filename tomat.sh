#!/usr/bin/env bash

SLEEP_DURATION=${SLEEP_DURATION:=1}  # default to 1 second, use to speed up tests

progress-bar() {
  local duration
  local columns
  local space_available
  local fit_to_screen  
  local space_reserved

  space_reserved=6   # reserved width for the percentage value
  duration=${1}
  columns=$(tput cols)
  space_available=$(( columns-space_reserved ))

  if (( duration < space_available )); then 
  	fit_to_screen=1; 
  else 
    fit_to_screen=$(( duration / space_available )); 
    fit_to_screen=$((fit_to_screen+1)); 
  fi

  already_done() { for ((done=0; done<(elapsed / fit_to_screen) ; done=done+1 )); do printf "▇"; done }
  remaining() { for (( remain=(elapsed/fit_to_screen) ; remain<(duration/fit_to_screen) ; remain=remain+1 )); do printf " "; done }
  percentage() { printf "| %s%%" $(( ((elapsed)*100)/(duration)*100/100 )); }
  clean_line() { printf "\r"; }

  for (( elapsed=1; elapsed<=duration; elapsed=elapsed+1 )); do
      columns=$(tput cols)
      space_available=$(( columns-space_reserved ))
      already_done; remaining; percentage
      sleep "$SLEEP_DURATION"
      clean_line
  done
  clean_line
}

# Usage: > tomat 25 'Task name'

SECOND=${2}
TASK_NAME=${3}
NOW=`date +"%Y-%m-%d %T"`
checkbox="[v]"

start=$SECONDS

function cleanup {
  end=$SECONDS
  duration=$((( end - start )/60))
  if ((duration < SECOND))
    then
      say "Жаль!"
      checkbox="[ ]"
  fi
  # Можно выключать звук на время помидорки или на время перерыва
  # osascript -e "set Volume output muted true"
  # Можно переключать звук на наушники
  # SwitchAudioSource -s 'Built-in Output'
  # Нажимаем "горячую клавишу" чтобы включить уведомления на MacOs
  osascript -e "tell application \"System Events\" to keystroke \"D\" using {command down, shift down, option down, control down}"
  # Логируем в журнал сделанную задачу
  echo "${NOW} | ${checkbox} ${TASK_NAME} | ${duration} мин." >> !done.txt
  # У яндекс.музыки в браузере ctrl+shift+P ставит музыку на паузу в перерыв (если настроить)
  osascript -e "tell application \"System Events\" to keystroke \"P\" using {shift down, control down}"
}
trap cleanup EXIT

# Выключаем уведомления MacOS
osascript -e "tell application \"System Events\" to keystroke \"D\" using {command down, shift down, option down, control down}"
# Включаем музыку в браузере (горячие клавиши настроены в браузере)
osascript -e "tell application \"System Events\" to keystroke \"P\" using {shift down, control down}"
# Можно включить громкость
# osascript -e "set Volume output muted false"
# Можно переключать источник звука на звуковую плату
# SwitchAudioSource -s 'CA DacMagicXS 2.0'

# Далее блок блокировки отвлекающих сайтов на указанное время при помощи программы SelfControl
defaults write org.eyebeam.SelfControl BlockDuration -int ${SECOND}
defaults write org.eyebeam.SelfControl HostBlacklist -array facebook.com news.ycombinator.com vk.com youtube.com zen.yandex.ru yandex.ru facebook.com lenta.ru livejournal.com www.youtube.com youtube.com mail.google.com
defaults read org.eyebeam.SelfControl
sudo /Applications/SelfControl.app/Contents/MacOS/org.eyebeam.SelfControl $(id -u $(whoami)) --install

# Очищаем терминал перед запуском прогрессбара
reset

# Мак умеет разговаривать
say "Начали!"
echo "${TASK_NAME} ${SECOND} мин."
# Функция обеспечивает паузу и показ прогресс-бара в терминале
progress-bar $((SECOND*60))
say "Вы молодец, так держать!"
