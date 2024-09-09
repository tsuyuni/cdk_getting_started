import { Stack, StackProps } from "aws-cdk-lib";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class FunctionStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    deploymentBucket: Bucket,
    props?: StackProps
  ) {
    super(scope, id, props);

    const lambdaFunction1 = new Function(this, "LambdaFunction1", {
      runtime: Runtime.NODEJS_LATEST,
      handler: "index.handler",
      code: Code.fromBucket(deploymentBucket, "lambdaFunction1.zip"),
    });
  }
}
