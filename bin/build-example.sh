mkdir -p ./example/assets

# Copy CSS
# Compiles Sass to CSS
node_modules/node-sass/bin/node-sass \
--include-path src/styles \
--output ./example/assets \
./src/styles/data-calendar.scss bundle.css

# Autoprefix definitions
autoprefixer ./example/assets/bundle.css

# Make JS
browserify \
-t babelify \
-x react \
-x moment \
-r ./example/example.jsx \
-o ./example/assets/bundle.js

# Make Vendor JS
browserify \
-r react:react \
-r moment:moment \
-r ./bin/dummyFile \
-o ./example/assets/vendor.js
