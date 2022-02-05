rm -rf dist
yarn build
mkdir dist/src
cp ./src/images ./dist/src/images -r
yarn deploy