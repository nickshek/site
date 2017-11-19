#!/bin/bash
realpath() {
  OURPWD=$PWD
  cd "$(dirname "$1")"
  LINK=$(readlink "$(basename "$1")")
  while [ "$LINK" ]; do
    cd "$(dirname "$LINK")"
    LINK=$(readlink "$(basename "$1")")
  done
  REALPATH="$PWD/$(basename "$1")"
  cd "$OURPWD"
  echo "$REALPATH"
}

SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")

eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
pyenv activate doc
cd ~/Code/sphinx-til && pip install -r requirements.txt
cd ~/Code/sphinx-til && make html
cd "${SCRIPTPATH}/" && rsync -avz ~/Code/sphinx-til/_build/html/* "${SCRIPTPATH}/output_dev/doc/"
cd "${SCRIPTPATH}/" && php "${SCRIPTPATH}/vendor/bin/sculpin" generate --watch --server
