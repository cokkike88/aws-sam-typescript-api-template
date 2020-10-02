# init project
sam init

# build functions
sam build

# validate template [yml|yaml]
sam validate
sam validate -t <path [yml|yaml]>

# build specific function
sam build <FUNCTION-DEFINED-YMAL>

# invoke local function
sam local invoke <function name in yml file>
sam local invoke -n env.json -e events/event-get-all-items.json getAllItemsFunction

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