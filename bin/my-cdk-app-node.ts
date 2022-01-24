#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { MyCdkAppNodeStack } from '../lib/my-cdk-app-node-stack';

const app = new cdk.App();
new MyCdkAppNodeStack(app, 'MyCdkAppNodeStack');
