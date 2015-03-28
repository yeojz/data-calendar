
rm -rf ./dist

./bin/build-js.sh
./bin/build-lib.sh
./bin/build-styles.sh
./bin/build-vendor.sh
./bin/build-example.sh