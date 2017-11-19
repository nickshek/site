<?php

// deploy.php
env('local_release_path', '~/git/nickshek.github.io');
env('sculpin', './vendor/bin/sculpin');

task('sculpin:build', function () {
    runLocally('{{sculpin}} generate --env=prod');
})->desc('build a static web site');

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
    'sculpin:build',
    'sculpin:copy_source',
    'sculpin:commit_and_push'
])->desc('Deploy your project');

// after('local:vendors', function() {
//     upload(env('local_release_path'), env('release_path'));
// })->desc('Upload local to remote');
