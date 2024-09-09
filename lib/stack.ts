import { Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { FunctionStack } from "./functionStack";

export class CdkGettingStartedStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const deploymentBucket = new Bucket(this, "DeploymentBucket", {
      bucketName: "cdk-getting-started-deployment",
    });

    new FunctionStack(this, "FunctionStack", deploymentBucket, {
      stackName: `function-stack-${process.env.Env}`,
    });
  }
}
