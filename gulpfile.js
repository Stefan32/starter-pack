var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
  // first is the name of the task
  // 2nd is what the task should do
  console.log("Hooray - this is a Gulp task");
});

gulp.task('html', function() {
  console.log("imagine usefulness happening");
});

gulp.task('styles', function() {
  console.log("css changes detected");
});

gulp.task('watch', function() {
  // 1st is the name of the file you want to watch
  // "./" is to go to the root of your project
  // 2nd is what should happen when we save a change
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  //create another wath area
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
