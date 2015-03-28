mkdir -p ./dist/styles

# Compiles Sass to CSS
node_modules/node-sass/bin/node-sass \
--include-path src/styles \
--output ./dist/styles \
./src/styles/data-calendar.scss \
data-calendar.css

# Autoprefix definitions
autoprefixer dist/styles/data-calendar.css

# Clean CSS
cleancss dist/styles/data-calendar.css -o dist/styles/data-calendar.min.css