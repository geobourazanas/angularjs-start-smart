# AngularJs Start Smart

Create an Angular application using this demo as a bootstrap. 

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from http://git-scm.com/.

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon
    ```

    >Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)

### Clone the demo project

Clone the demo project repository using [git][git]:

```
git clone https://github.com/geobourazanas/angularjs-start-smart.git
cd angularjs-start-smart
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files


### Run the Application

We have preconfigured the demo project with a simple development web server.  The simplest way to start
this server is:

```
gulp serve-dev
```

Now browse to the app at `http://localhost:9000`.

### Linting
 - Run code analysis using `gulp vet`. This runs jshint, jscs, and plato.

### Tests
 - Run the unit tests using `gulp autotest` (via karma, mocha, sinon).
 - Run the e2e tests using `gulp e2e` (via protractor).

### Running in dev mode
 - Run the project with `gulp serve-dev`
 - opens it in a browser and updates the browser with any files changes.

### Building the project
 - Build the optimized project using `gulp build`
 - This create the optimized code for the project and puts it in the build folder

### Running the optimized code
 - Run the optimize project from the build folder with `gulp serve-build`

## Exploring this demo project
AngularJs Start Smart project

### Structure
The structure also contains a gulpfile.js and a server folder. The server is there just so we can serve the app using node.

    /src
        /client
            /app
            /content

### Installing Packages
When you generate the project it should run these commands, but if you notice missing packages, run these again:

 - `npm install`
 - `bower install`

### The Modules
The app has 4 feature modules and depends on a series of external modules and custom modules

```
app --> [
        app.products --> [],
        app.layout --> [
            app.core
        ],
        app.widgets,
        app.core --> [
            'ngAnimate', 
            'ngSanitize',
            'ngTouch',
            'ui.router', 
            'ui.select',
            'ui.bootstrap',
            'ncy-angular-breadcrumb',
            'angularMoment',
            'schemaForm',
            'ngFileUpload',
            'blocks.exception', 
            'blocks.logger', 
            'blocks.router',
            'blocks.filters'
        ]
    ]
```

#### core Module
Core modules are ones that are shared throughout the entire application and may be customized for the specific application. Example might be common data services.

This is an aggregator of modules that the application will need. The `core` module takes the blocks, common, and Angular sub-modules as dependencies.

#### blocks Modules
Block modules are reusable blocks of code that can be used across projects simply by including them as dependencies.

##### blocks.logger Module
The `blocks.logger` module handles logging across the Angular app.

##### blocks.exception Module
The `blocks.exception` module handles exceptions across the Angular app.

It depends on the `blocks.logger` module, because the implementation logs the exceptions.

##### blocks.router Module
The `blocks.router` module contains a routing helper module that assists in adding routes to the $routeProvider.

## Gulp Tasks

### Task Listing

- `gulp help`

    Displays all of the available gulp tasks.

### Code Analysis

- `gulp vet`

    Performs static code analysis on all javascript files. Runs jshint and jscs.

- `gulp vet --verbose`

    Displays all files affected and extended information about the code analysis.

- `gulp plato`

    Performs code analysis using plato on all javascript files. Plato generates a report in the reports folder.

### Testing

- `gulp test`

    Runs all unit tests using karma runner, mocha, chai and sinon with phantomjs. Depends on vet task, for code analysis.

- `gulp autotest`

    Runs a watch to run all unit tests.

- `gulp e2e`

    Runs the end 2 end tests


### Serving Development Code

- `gulp serve-dev`

    Serves the development code and launches it in a browser. The goal of building for development is to do it as fast as possible, to keep development moving efficiently. This task serves all code from the source folders and compiles less to css in a temp folder.


### Building Production Code

- `gulp html`

    Optimize all javascript and styles, move to a build folder, and inject them into the new index.html

- `gulp build`

    Copies all fonts, copies images and runs `gulp html` to build the production code to the build folder.

### Serving Production Code

- `gulp serve-build`

    Serve the optimized code from the build folder and launch it in a browser.

- `gulp serve-build --nosync`

    Serve the optimized code from the build folder and manually launch the browser.


## License

MIT