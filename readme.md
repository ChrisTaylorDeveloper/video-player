# Build the Education Player
docker run --rm -w /home/node/app -v $(pwd):/home/node/app node:16 npm run build

## Lint JavaScript files
docker run --rm -w /home/node/app -v $(pwd):/home/node/app node:16 npx eslint the-file.js

See index.html for useage example.
