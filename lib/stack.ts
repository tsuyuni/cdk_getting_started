import * as cdk from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class CdkGettingStartedStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const deploymentBucket = new Bucket(this, "DeploymentBucket", {
      bucketName: "cdk-getting-started-deployment-bucket",
    });
  }
}
