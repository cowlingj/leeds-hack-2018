#!/usr/bin/env bash

aws lambda create-function \
  --region us-east-1 \
  --function-name monkey-island-duels \
  --runtime nodejs8.10 \
  --handler index.handler \
  --role arn:aws:iam::057981246180:role/lambda_basic_execution \
  --zip-file fileb://dist/out.zip
