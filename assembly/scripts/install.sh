source $HOME/.nvm/nvm.sh
nvm use v12.18.1
rm -rf ./dist
npm install

if [ x"$CI_COMMIT_REF_NAME" == x"integration" ];then
  echo "当前是fat环境"
  npm run build:fat
elif [ x"$CI_COMMIT_REF_NAME" == x"production" ];then
  echo "当前是prod环境" 
  npm run build:prod
elif [ x"$CI_COMMIT_REF_NAME" == x"pre-production" ];then
  echo "当前是uat环境"
  npm run build:uat
else
  echo "当前是默认环境"
  npm run build:fat
fi