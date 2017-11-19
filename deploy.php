<?php

env('sphinx_til_path', '~/Code/sphinx-til');
env('virtualenv_path', '~/.pyenv/versions/doc');

// deploy.php
env('local_release_path', '~/Code/nickshek.github.io');
env('sculpin', './vendor/bin/sculpin');

task('sphinx:install', function () {
    runLocally('cd {{sphinx_til_path}} && {{virtualenv_path}}/bin/pip install -r requirements.txt');
})->desc('install the Sphinx dependencies of packages');

task('sphinx:build', function () {
    runLocally('cd {{sphinx_til_path}} && . {{virtualenv_path}}/bin/activate && make html');
})->desc('Build the sphinx web package');

task('sculpin:build', function () {
    runLocally('{{sculpin}} generate --env=prod');
})->desc('build a static web site');

task('sphinx:sync', function () {
    runLocally('rsync -avz {{sphinx_til_path}}/_build/html/* output_prod/doc/');
})->desc('Copy sphinx build to output_prod directory');


task('sculpin:copy_source',function(){
  runLocally("rsync -av --delete --exclude '.git' output_prod/ {{local_release_path}}");
})->desc('copy source code to temp folder');

task('sculpin:commit_and_push',function(){
  runLocally("cd {{local_release_path}} && git add .");
  runLocally(sprintf("cd {{local_release_path}} && git commit -m \"update date : %s\"",date("Y-m-d H:i:s")));
  runLocally("cd {{local_release_path}} && git push --all");
})->desc('copy source code to temp folder');

/**
 * Main task
 */
task('deploy', [
    'sphinx:install',
    'sphinx:build',
    'sculpin:build',
    'sphinx:sync',
    'sculpin:copy_source',
    'sculpin:commit_and_push'
])->desc('Deploy your project');

// after('local:vendors', function() {
//     upload(env('local_release_path'), env('release_path'));
// })->desc('Upload local to remote');
