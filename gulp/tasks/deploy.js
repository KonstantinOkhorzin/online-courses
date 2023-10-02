import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

import path from '../config/path.js';

const deploy = () => {
  return gulp.src(path.root).pipe(ghPages());
};
