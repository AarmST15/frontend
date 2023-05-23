echo "Switch to branch master"
git checkout master

echo "Building app ..."
npm run build

echo "Deploying files to server ..."
scp -r build/* arm@174.138.19.132:/var/www/174.138.19.132/

echo "done"