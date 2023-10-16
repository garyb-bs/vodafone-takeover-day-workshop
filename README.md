<p float="left">
  <img src="https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780" width="500" height="110" title="BrowserStack">
  <img src="https://i.imgur.com/I3vu3uh.png" width="100" height="100" title="Slash">
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_vodafone_new.png" width="200" height="150" title="Vodafone">
</p>

# Vodafone Takeover Day Workshop

This repo contains samples for running [Playwright](https://playwright.dev/docs/intro) tests on BrowserStack using the browserstack-node-sdk.

## Setup

* Clone the repo `git clone https://github.com/garyb-bs/vodafone-takeover-day-workshop.git` and run `cd vodafone-takeover-day-workshop`.
* Set `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` as environment variables with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) or update the same in `browserstack.yml` file.
* Run `npm install` to install the dependencies.

## Running your tests

- To run the sample tests in parallel across the platforms specified in the `browserstack.yml`, run `npm run sample-test`.

## Notes
* You can view your test results on the [BrowserStack Automate dashboard](https://www.browserstack.com/automate)
* Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/automate/parallel-calculator?ref=github)