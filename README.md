Admin Kolbe
----

[![Build Status](https://travis-ci.org/garciadiazjaime/website-treeping.svg)](https://travis-ci.org/garciadiazjaime/website-treeping)

Run project:
----
a) let's install all packages:

`yarn`

b) let's run the server

`npm run dev`

By default server will run on http://127.0.0.1:8080/

Note: `npm run sprites` requires 'sass'
http://sass-lang.com/install


Code to increase jslint max line length limit
/* eslint max-len: [2, 500, 4] */

Deploy project
`git checkout master`
`git reset --hard origin/master`
`git push upstream`

Login rch
setup -l setup email

Remove Cartridge
http://stackoverflow.com/questions/31323791/how-do-you-delete-a-database-cartridge-on-an-openshift-app

Setting up Envs
rhc env set -a app DB_NAME=value
rhc env set -a app DB_USER=value
rhc env set -a app DB_PASSWORD=value
rhc env set -a app DJANGO_SETTINGS_MODULE=settings.prod
rhc env set -a app SENDGRID_API_KEY=value
rhc env set NPM_CONFIG_PRODUCTION=true -a app

Checking Envs
rhc env list -a app
