import React from "react";
import ReactDOM  from "react-dom/client";

// we need to bundle our code, we need to optimize our code before we push our code to production
// react itself cannot make our application fast
// npm is a package manager for javascript
// it comes with nodejs
// npm is a repo for all the packages that we need in our project

// TASK1 ADDING NPM TO OUR PROJECT
// we won't do npm init -y
// we will be asked to give some information
// we got a new file package.json file
// package.json is a configuration file for npm
// why do we need package.json? 
// the packages that our project depends on are known as dependencies
// npm will take care of what is version of the package, npm maintains the package.json file for storing information about the dependencies
// TASK2 INSTALLING DEPENDECIES (BUNDLERS)
// using the command npm install parcel
// we will install parcel as a dev dependency

// ABOUT BUNDLERS
// for bundling, compressing, optimiziing code
// examples: webpack, parcel, vite
// we will be using parcel
// it makes our project ready to be shipped to production
// create react app uses webpack and babel bundler behind the scences 
// now parcel is being installed from the npm registry
// we see parcel with it's version as a dev dependency in the package.json file 
// we will get a node_modules folder
// we will get a package-lock.json folder
// npm registry contains all the packages 
// package-lock.json file stores the exact version of the packages
// package.json keeps high level tracking of the packages
// package-lock.json keeps low level tracking of the package
// node_modules flder contains the actual code of the dependencies as well as a indirect dependencies that we have fetched from the npm registry
// node_modules is very very heavy
// it's like a database which stores the code of the dependencies
// but we didn't install so many dependencies
// the reason beind so many folders in the node_modules is: we installed parcel, parcel needs the help of many other packages, which may need help of other packages, and these indirect dependencies are called transitive dependencies
// every dependency has their own package.json
// we will add node_modules to the gitignore file
// because this node_modules folder can be generated again
// we need to add pacakge.json and package-lock.json file to git
// they maintain data about the dependencies that our project needs
// so if we have pushed them to the git, then the node_modules folder can be regenerated using the command npm install command
// igniting our app using the command npx parcel index.html
// parcel has created a local server for use and has hosted our project on this server 
// npx command is used for executing a package
// parcel has build a developmet build and hosted it on a local server

// DEPENDENCIES
// dev dependencies are used in development phase
// normal dependencies are used in the production phase
// we install parcel as a dev dependency because we will be using it in the development phase 

// PARCEL
// creates a dev build
// creates a local server
// provides the HMR feature
// caches our builds, so the further builds takes less time, resulting in faster builds
// it's caching things up in the .parcel-cache folder
// does image optimization
// does minification of our code also
// does bundling
// compresses our code
// does consistent hashing
// does code splitting
// does differential bundling (so that our application runs on across browsers)
// uses a file watching algorithm which is written in c++
// does some diganostics
// helps us to host our app on https
// does tree shaking (delete the code then isn't used in the application)

// BUILDING A DEVELOPMENT BUILD
// using the command: npx parcel build index.html
// this will give an error
// we need to remove the main from the package.json file
// we need to have the index.html as the main
// but main has been set to script.js in the package.json file

// DIST FOLDER
// contains the final builds
// we do not need to push the DIST folder to git
// it can be re-generated again
// it contains the production-ready code

// WHY CDN LINKS ISN'T A GOOD WAY
// because it's making a network call
// because we would need to change the links manually when updates are pushed
// so we will install react using npm i react
// we will install as normal dependencies

// USING THE INSTALLED REACT AND REACT-DOM
// we need to import them
// but normal scripts cannot have import and export startement
// we need to make the normal browser script a module using the type attribute in the script element
// React is fetched from react
// ReactDom is fetched from react-dom/client
// parcel does HMR

const newElement = React.createElement(
    'h1',
    {
        id: 'head1',
        className: 'elems',
        title: 'a heading'
    },
    'namaste india'
);
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(newElement);
console.log(newElement);

// WHAT TO PUSH AND WHAT NOT TO
// we won't push node_modules, dist, .parcel-cache
// we will push our code and package.json and package-lock.json
// they will in the git
// now they will be sent to the server
// server will run the code
// since server has the pacakge.json and package-lock.json file it will re-generate the node_modules folder, dist folder and .package-cache folder

// NOW THIS IS PRODUCTION READY APP

// BROWSERLISTS
// we have add some configurations to the browserlists so that we can specify which browsers should our project should be compatible with
// making our application compatible for a particular browser adds some overhead to the project
// so making our application compatible for all the browsers isn't a good idea
// 

// HOMEWORK
// caret and tilde
// why does it happen that it's working on my local but it's not working on the production