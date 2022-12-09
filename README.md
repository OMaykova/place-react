# 'Place' service on React with authorization and registration

The work is presented by a one-page website created based on a layout from Figma. This is an interactive page where you can add photos, delete them and put likes.

All requests for authorization, registration and verification of the token work through the service https://auth.nomoreparties.co .

Site [omaykova.nomoredomains.xyz](omaykova.nomoredomains.xyz)

Api [api.omaykova.nomoredomains.xyz](api.omaykova.nomoredomains.xyz) 

## Technologies

* HTML
* CSS
* REACT

## Required components

To contribute, you need to install the following pre-components:
Create React App
NPM

Available scenarios
In the project folder you can:

`npm start` - launch the application in 'development mode' Open http://localhost:3000 to view it in your browser.

`npm run build` - run the build for 'production' in the build folder.

## Further improvements

Do form validation on REACT
Configure browser settings for the select drop-down menu in forms

# Backend

This repository contains the development of the Express server for the interactive photo service "Place". The server provides routing, user authorization. A global error handler and data validation are configured. The MongoDB database is also used in this project.

## Technologies

* Express
* Mongoose
* Bcrypt
* Nodemon

## Directories

`/routes` — folder with router files
`/controllers` — folder with user controller and card
`files/models` — folder with user schema and card description files

The remaining directories are auxiliary, created if necessary by the developer

## Starting

`run start` — starts the server
`npm run dev` — starts the server with hot-reload