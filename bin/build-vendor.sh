
mkdir -p ./dist/js

# Create the Vendor File
browserify \
-r react:react \
-r moment:moment \
-r ./bin/dummyFile \
-o ./dist/js/vendor.js
