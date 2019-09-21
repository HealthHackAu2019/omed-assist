#!/bin/bash

echo "--------------- building static site..."
npm run build

echo "--------------- deploying to s3 bucket..."
aws s3 sync build/ s3://www.omedassist.com
