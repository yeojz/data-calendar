
rm -rf ./dist
mkdir -p ./dist

# Compile JavaScript
browserify -t reactify -r ./src/index.js:data-calendar -o ./dist/date-calendar.js

# Compiles Sass to CSS
node_modules/node-sass/bin/node-sass \
--include-path src/styles \
--output ./dist \
./src/styles/data-calendar.scss data-calendar.css

# Autoprefix definitions
autoprefixer dist/data-calendar.css

# Clean CSS
cleancss dist/data-calendar.css -o dist/data-calendar.min.css