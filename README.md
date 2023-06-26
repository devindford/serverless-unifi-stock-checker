
# Unifi Stock Checker

Servless setup for a unifi stock check based on a product slug that will check the button on the page to see if it's sold out or not. If it is not, it will send a message to a webhook.

## Local Setup
You will need to have serverless installed locally (`npm i serverless -g`) and have your authentication with AWS setup to use this.

- run `npm i`
- update the `serverless.yml` file with your account number, region for the resource `arn:aws:ssm:<region>:<account-number>:parameter/unifi-stock-checker/webhook`
- run `serverless deploy`

You can also update the cron timer as you see fit, mine currently checks every 15 minutes