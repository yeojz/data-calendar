
mkdir -p ./dist/js

# Compile JavaScript
browserify \
--extension=.js \
--extension=.jsx \
-t babelify \
-x react \
-x moment \
-r ./src/index.js:data-calendar \
-o ./dist/js/data-calendar.js

# Uglify
uglifyjs \
./dist/js/data-calendar.js \
-o ./dist/js/data-calendar.min.js \
-c unused=false \
-m \
-r '$,require,exports'


