
deploy() {
    npm run build
    git add -A 
    git commit -m "$*"
    git push origin master
    git push origin `git subtree split --prefix dist/pwa-mat develop`:live --force
}

deploytest() {
    npm run build
    git add -A 
    git commit -m "$*"
    git subtree push --prefix dist/pwa-mat origin live
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

devq() {
  quasar dev
}
apiq() {
  cd server
  npx babel-node server
}
