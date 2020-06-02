# Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2. The following commands are fully tested with Linux bash. The project works on Linux/Windows/MacOS.

For Windows, the following Linux commands can directly run in [git-bash](https://git-scm.com/download/win).

## Add an article

Put the content html into `src/assets` folder, and register the article topic, filename and date in `src/assets/article.json` file.

## Initialize the project

Be sure to have Node.js installed. For portable Node.js, run `export PATH=<NODE_HOME>:$PATH` (replace `<NODE_HOME>` with the absolute path to Node.js root directory)

Run `npm install -g @angular/cli angular-cli-ghpages`

At the project root, run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --prod --base-href "https://<ACCOUNT_ID>.github.io/<REPO>/"` to build the project. The build artifacts will be stored in the `docs/` directory. If the URL is already customized, run with the actual URL instead, e.g., `ng build --prod --base-href "https://lijianzhao.com"`

Run `cp docs/index.html docs/404.html` to copy `docs/index.html` to `docs/404.html` to handle page refresh/bookmark.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
