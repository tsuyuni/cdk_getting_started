#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkGettingStartedStack } from "../lib/stack";
import * as dotenv from "dotenv";

dotenv.config();

const app = new cdk.App();
new CdkGettingStartedStack(app, "CdkGettingStartedStack", {
  env: {
    region: "ap-northeast-1",
  },
});
