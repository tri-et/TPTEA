
deploy() {
    npm run build
    git add -A 
    git commit -m "$*"
    git push origin master
    git subtree push --prefix dist/pwa-mat origin live
}

deploytest() {
    npm run build
    git add -A 
    git commit -m "$*"
    git push origin `git subtree split --prefix dist/pwa-mat livetest`:livetest --force
}

dev() {
  npm run dev
}

api() {
  npm run api
}

migrate() {
  cd server
  sequelize db:migrate
  cd ..
}

seed() {
  cd server
  sequelize db:seed:all
  cd ..
}

testcafe() {
  npm run test
}
