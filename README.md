-- Code for running firebase emulator
firebase emulators:start
firebase deploy --only hosting

-- Code for running node-sass
node-sass --watch src/scss --output public/css
