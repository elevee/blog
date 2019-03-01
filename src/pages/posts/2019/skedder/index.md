---
title: Scraping Hockey Schedules into Google Calendar with Python & Lambda
date: "2019-02-01T22:12:03.284Z"
published: true
---

I play in a couple of hockey leagues here, and while game dates, times, rinks, and opponents are subject to change, it's rare that the rink notifies the teams involved in the event of such a change. They just rely on you checking their website week-to-week.

I figured I could continue entering games into our shared Google Calendar manually, double-checking the week-of for any discrepancies between the Google Calendar and the site, or I could throw a quick script together and have it done for us.

This screamed for a web scraper and an accompanying script. It'd be hosted on some server or even "serverless" architecture, and run on a daily cron job just to keep these rink folks from surprising us again.

## Python takeaways
This served as a nice project to get more acquainted with Python. Python reminded me of Ruby right off the bat. Very developer-friendly. I see why the whitespace indenting being determinent of the logic can throw people off guard a little, but I grew accustomed to this quickly and it does make for prettier, if unfinished-looking, structure.

Another thing I realized are the built-in, yet modular imports Python has. To work with dates, I had to import `datetime`. Computations? `import math`. Even if I wanted to exit an execution early, one must import `sys` for system-specific parameters and functions to run `sys.exit('exiting early')`. This language feature is similar to Node and how they require you to import modules like `path` and `http` for _à la carte_ functionality.


## Lambda takeaways and Build/Deploy Process
I had previous familiarity with Lambda from working on the [Chef](/projects/chef) Alexa app. Due to the nature of Lambda, I had to design the script to be one function call, and bundle all of my dependencies along with the source code. 

While this build process could be done with a number of build tools like Webpack or Gulp, I was able to create a number of simple Make tasks with the helpful assistance of [Ben Emson](https://www.youtube.com/watch?v=68teS9nNvPQ).

```bash
PROJECT = skedder
VIRTUAL_ENV = env
FUNCTION_NAME = skedder
AWS_REGION = us-east-1
FUNCTION_HANDLER = lambda_handler
LAMBDA_ROLE = arn:xxxxxxxxxxxxxx

# Default commands
install: virtual
build: clean_package build_package_temp copy_python remove_unused zip

#create venv if not yet done
virtual:
	@echo "--> Setup and actiate virtualenv"
	if test ! -d "$(VIRTUAL_ENV)"; then \
		pip3 install virtualenv; \
		virtualenv $(VIRTUAL_ENV); \
	fi
	@echo ""

clean_package:
	rm -rf ./package/*

build_package_temp:
	mkdir -p ./package/tmp/lib
	cp -a ./$(PROJECT)/. ./package/tmp/

copy_python:
	if test -d $(VIRTUAL_ENV)/lib; then \
		cp -a $(VIRTUAL_ENV)/lib/python3.7/site-packages/. ./package/tmp/; \
	fi
	if test -d $(VIRTUAL_ENV)/lib64; then \
		cp -a $(VIRTUAL_ENV)/lib64/python3.7/site-packages/. ./package/tmp/; \
	fi

remove_unused:
	rm -rf ./package/tmp/wheel*
	rm -rf ./package/tmp/easy-install*
	rm -rf ./package/tmp/setuptools*

zip:
	cd ./package/tmp && zip -r ../$(PROJECT).zip .
```

The `virtual` task starts a Python virtual environment via `virtualenv`. This helps treat your file folder structure as if each app is already containerized, which is great for dependency organization. Path variables change when a virtual environment is activated. I no longer had to type the executable `python3` as `python` mapped to the local install, which was already using 3.7.

The `make build` task fires a slew of other tasks, ultimately culminating in a zipped file to be uploaded using Amazon's Lambda GUI. It's entirely possible to do this fully on the command line, which is where you would need the `LAMBDA_ROLE` variable. A likely implementation later on.

`clean_package` removes any previously built packages. `build_package_temp` creates the new folder and starts copying the project source files into it. We then run `copy_python` to bring the Python libraries over to our newly created package. Having a virtual environment makes this step easier, as we don't need every library we've ever installed globally in this project package. Before zipping, we run `remove_unused` to get rid of any files that are unnecessary to keep the filesize down.

## OAuth 2.0 Token Refreshing
Authentication tokens exchanged via OAuth expire in an hour by default. While authentication and reauthentication was straightforward as-is in development, it proved a bit tricky in production. The [documentation](https://google-auth-oauthlib.readthedocs.io/en/latest/reference/google_auth_oauthlib.flow.html) gave a convenient method to give you the option to authenticate using your browser locally, by spinning up a local server, but such a tactic wouldn't work on a browserless server. 

I ended up using the `from_client_secrets_file` method to generate an initial token from my credentials json file, but an added complication presented itself: 

>The only writable directory on Amazon Lambda functions is the `/tmp` directory.

Locally, I decided to store the initial auth token in, perhaps-confusingly-but-deliberately-similarly-named `package/tmp`, which was already being populated with library files from the build anyway. After uploading to Amazon, the script would check the project-scoped `tmp/` directory, before storing (and therefore writing) the refreshed token to the Lambda function-scoped directory `/tmp`.

What a difference a slash makes.

## It's alive!

The script works. Every morning, at 4am, it scrapes, and compares, and if the game details don't match up, replaces the game event accordingly in the calendar. The source code can be found <a href="https://www.github.com/elevee/skedder" target="_blank">here</a>.

I've since made improvements to the algorithm for cases where games that have been orphaned (no longer have a corresponding game on the parsed web calendar) are removed.

Future improvements are to hook it up to post to a Slack webhook so I'm actually notified of a discrepancy without needing to check the production logs.