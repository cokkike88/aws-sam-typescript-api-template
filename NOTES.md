# init project
sam init
- To Use the template -> select the option 2 and enter
https://github.com/cokkike88/aws-sam-typescript-api-template.git

# build functions
- If the project doesn't have typescript config
sam build
sam build -t <path-of-the-yml-file-to-want-to-use-to-build>

- If the project have typescript config
- IMPORTANT: You have to config NODE_ENV enviroment
- To production NODE_ENV = production -> This'll select the production yml
- To development NODE_ENV = development -> This'll select the development yml
npm run build

# build specific function
sam build <FUNCTION-DEFINED-YMAL>


# validate template [yml|yaml]
sam validate
sam validate -t <path [yml|yaml]>

# invoke local function
sam local invoke <function name in yml file>
sam local invoke -n env.json -e events/event-get-all-items.json getAllItemsFunction

# invoke local api
- Up api in debug mode
sam local start-api -p 3008 -d 5858
-p port to up the api in docker
-d port to debug the api this port has to be the same that the .vscode/launch.json file

# debbug mode console
sam local invoke --debug-port 5858 <function name in yml file>

# deploy 
sam deploy -g


https://cicd.serverlessworkshops.io/javascript.html

https://ecsworkshop.com/introduction/

# ========= DOCUMENTATION ============

# lambda function definition
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-functionname

# deploy a lambda function aws sam
https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-lambda-sam.html

# sam build documentation
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-build.html

# sam local invoke documentation
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html

# sam deploy documentation
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html
https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorial-lambda-sam-deploy.html

# sam template global configuration (for all lambda functions)
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy-globals.html

# layer version to shared libraries or runtime code by a lambda function
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-layerversion.html


# To config jest to typescript

- Install prerequisites
npm i -D jest typescript

- Install
npm i -D ts-jest @types/jest

- Config jest
npx ts-jest config:init

- Run test
- Add package.json
"scripts": {
    "test": "jest"
}
- Run in cosole
npx jest
- Run single test
npx jest  get-all-items.test.ts