import React from "react";
import ReactDOM from "react-dom/client";
const newElement = React.createElement
    (
    'h1',
    {
        id: 'heading',
        key: 'head1',
    },
    'this is a heading, made using react and parcel HMR is working'
    );
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(newElement);
// the code we have written till now isn't ready to be pushed to production.
// we need to bundle our code, minify our code, optimize of code before we push it to production.
// for this we need a bundler like vite or parcel or webpack
// bundle does the required processing (of code) which needs to be done before pushing the code for production
// react alone cannot build a production ready app
// it needs the help of other libraries and packages for making a fast web applications
// npm is not node package manager
// npm manages packages
// npm is a standard repo for managing packages
// all the packages are hosted on npm

// commands:
// npm init (don't use npm inti -y)
// it will ask for details
// we got package.json file
// the package.json file is like a configuration file for our npm
// packages on which our project depends on are called dependencies
// now we can install packages into our project
// most important package in our project is a bundler
// a bundler packages our app so that it can be shipped to production
// create react app uses webpack and babel BTS
// two types of dependencies: dev depencies and normal dependencies
// dev dependencies are used in development phase
// normal dependencies are used in production phase
// we will install parcel as a dev dependency
// npm install -D parcel
// -D indicates that we want to install parcel as a dependency
// now parcel is being installed from the npm registry
// package.json will store the names of dev dependencies and normal dependencies separately
// package-lock.json keeps a track of exact version of package, it keeps a record of exact version it
// package.json keeps a record of approximate version (high level configuration)
// packge.json keeps a record of exact version (low level configuration)
// node modules is heavy
// it contains all the packages that we have installed
// we haven't insalled so many packages
// they are dependencies of dependencies..... that we used
// it contains the transitive dependencies also
// parcel needs the help of several other dependencies 
// every dependency that we have has it's own dependency
// we shouldn't push node_modules to git (put it in gitignore)
// we need to push package.json and package-lock.json to git
// package-lock.json ensures that what in our local is also on our production
// if we have package.json and package-lock.json file we can re-create our node_modules
// we will delete the node_modules
// now we will run npm install command to re-generate our node_modules
// and yes it's working
// what ever can be re-generated shouldn't be pushed to git
// igniting our app using "npx parcel index.html"
// parcel has created a server for us
// npx is used for executing a package
// parcel will go to the index.html and will create a development build for us
// now we will install react and react dom because cdn links is not a good way
// problems with using cdn (a) it's a netork request (b) if react updates we would need to update the cdn links
// we will react as a normal dependency
// we will react dom as a normal dependency
// npm i react is same as npm intstall react
// now we will remove cdn links
// we need to import react and react dom
// import ....
// import ....
// but browser scripts cannot have import statements
// we need to set the value of type attribute for script tag to module
// we need to import the ReactDOM from react-dom/client
// parcel uses HMR
// parcel caches our project into the .parcel-cache
// if we delete it, parcel will re crate the .parcel-cache
// what will parcel do 
// - create dev build
// - create local server
// - HMR
// - file watchinga algorithm (written in c++)
// - does chaching for faster build
// - does image optimization
// - does minification
// - does bundling
// - comprsses the images and other assets
// - does consistent hashing
// - does code splitting
// - does differential bundling
// - does the diagnostic
// - does error handling
// - does tree shaking (parcel will remove unused code for us)
// react is not the only thing that is making our app fast
// parcel has a big hand in making react apps fast
// parcel uses other libraries for getting the job done
// to create a prod build npx parcel build index.html
// but for this command to run successfully we must remove the main = script.js in our package.json file
// the dist folder contains the final optimized and minifide code which will be pushed to production
// we successfully ran the npx parcel build index.html command but we didn't get a link
// the dist folder can also ge generated again 
// production build takes slightly more time in than a development build
// we push our local code to git
// server pushes code from git
// we don't need to push node_modules, dist, .parce-cache
// we will push package.json and package-lock.json to git
// the node_modules generated on server is little different from the node_modules on our local
// server will have it's own dist folder
// to make our application compatible for older browser we need to configure browser lists package / library
// for configuration we will add a browserlists section to the package.json file and specify the value
// get those value by surfing the web (or from the browserlists official website)
// we shouldn't not include the browser we don't wish to server so that no extra overhead is added to our application
// 

// NODE JS INSTALLATION
// go to node js website
// click download LTS version
// check the automatically download checkbox which comes somewhere in the installation process
// keep clicking on next
// check for node's installation using the command prompt
// open command prompt run this command:- node -v
// if we get to see the version of the node, then this indicates that node js has been installed successfully

// HOMEWORK
// EPISODE2
// caret v/s tilde