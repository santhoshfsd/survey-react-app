# survey-react-app

# Tech Stack

Express Server
MongoDB
React - Redux
Google OAuth 
Passport JS
Email Provider

# Landing Page 
  - header
    - Login -  OAuth

# Campain Result Page
    #    Add Credits
    #    New Campain

# App Architecture

Server 
 - npm init 
 - express
Node - JS runtime
Express - helpers for Http traffic easier
# commonJs Modules 
    - sharing files between modules /import express - es2015 modules

Request Method 
 - get,post, put, delete, patch
  
# Heroku Deployment checklist
    dynamic port binding++
    specify node environment   
    specify start script
    gitignore
First Time Deployment
- git based work flow
- heroku cli
- deploy app with git
- heroku login, create, open 
  - https://salty-brook-37273.herokuapp.com/ 
  - deployment target -  https://git.heroku.com/salty-brook-37273.git
- git remote add heroku git url
- heroku logs
# OAuth
 passportJS - authentication flow

passport - general helpers for express apps, 
passport strategy - helpers for authenticating
Client id and Client secret
redirect uri
googleStrategy

cookie-session to manage cookies with passport js

- cookie session extracts cookie data 
- passport - pulls id out of cookie data
- deserializUser - get user from id
- add user model to req as object

middleware - small piece of program to manipulate the request, before it gets passed to the route handler

cookie session
express session  - reference to a session in a store 

set-cookie  - encrypted session


Redirect URI -http vs https
- relative path 
- deployment pattern
- strategy - proxy - doesnt trust a proxy

React Client 

- run the server and client concurrently -- prefix client-dir

cookies - will be included in the request within a same domain

by default cookie is not included for different port - different domains

Cors


auth flow with proxy

- relative path - browser prefix the current domain
- http-proxy-middleware

Promise  - async returns a promise