# ChartExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Build and deploy
ng build --prod
npm install -g firebase-tools
firebase login
firebase init
  Provide directory as dist/<project_dir>
  Single page = y
  File 'indexx.html' Overwrite ? = N
firebase deploy
  You will get hosting URL as below 
  Project Console: https://console.firebase.google.com/project/chartexample-b62eb/overview
  Hosting URL: https://chartexample-b62eb.web.app

## Adding Charts dependency
  1) npm install --save chart.js
  2) npm install --save ng2-charts

##Sample Demo :
 https://chartexample-b62eb.web.app