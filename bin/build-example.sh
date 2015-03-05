mkdir -p example/assets

# Copy CSS
# Compiles Sass to CSS
node_modules/node-sass/bin/node-sass \
--include-path src/styles \
--output ./example/assets \
./src/styles/data-calendar.scss bundle.css

# Autoprefix definitions
autoprefixer ./example/assets/bundle.css

# Make JS
browserify -t reactify ./example/example.jsx -o ./example/assets/bundle.js

