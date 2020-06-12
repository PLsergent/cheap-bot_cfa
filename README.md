# cheap-bot_cfa
React native project, cheap bot for social media.

Workflow (see `.github/workflows`):<br>
![Main workflow CI](https://github.com/PLsergent/cheap-bot_cfa/workflows/Node.js%20CI/badge.svg)

## Generate docs
```
cd cheap-bot_cfa
npm i -g react-docgen
react-docgen ./code/components/* | ./docs/buildDocs.sh
```

Docs available here :

https://plsergent.github.io/cheap-bot_cfa/

## Run project
```
cd cheap-bot_cfa/code
expo start
```

## Run tests
```
cd cheap-bot_cfa/code
```

Dev env:
```
npm run test-dev
```

Prod env:
```
npm run test
```
