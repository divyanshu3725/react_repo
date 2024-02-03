import React from "react";
import ReactDOM from "react-dom/client";

// BREAKING DOWN THE npx parcel index.html COMMAND
// npx command is used to execute a npm package
// index.html at the end of the command means we are specifying the index.html file as the source file

// MAKING SCRIPTS
// inside the package.json file
// for development build
// - "start": "parcel index.html",
// - "build": "parcel build index.html",
// syntax for running a script: npm run scriptName;
// now we can write npm run start for starting a development build 
// now we can write npm run build for starting a production build 
// npm run start is an industry standard
// we can also use npm start in place of npm run start
// but we cannot use npm build for npm run build

// REACT ELEMENTS
// are equivalent to DOM elements
// react.createElement is not an HTML element
// reactelement at the end of the day is a javascript object
// it becomes an HTML element when we render this into the DOM 

// rootElement.render(reactElement) REPLACES the CONTENT of the ROOT with the REACTELEMENT content
// write not rendered inside the root element (for better debugging)

// React.createElement and ReactDOM.createRoot are CUMBERSOME
// so we use jsx
// jsx is not necessary for writing react code
// but it makes our code more readable
// jsx is a javascript syntax for creating react elements
// jsx is not a part of react

// IN OLDEN DAYS... 
// HTML and JavaScript were written in separate files
// and modern JavaScript libraries and frameworks solve this problem by combining HTML and JavaScript inside a single file

// JSX
// is not HTML inside JavaScript
// JSX is HTML like syntax
// an element creation code using JSX uses the React.createElement code behind the scenes
// try logging JSX element and React element
// JSX is not pure JavaScript
// JavaScript Engine can understand JavaScript code, but cannot understand the JSX code
// Babel converts JSX into corresponding React.createElement code
// Babel transpiles the JSX code before it goes to the JavaScript engine
// transpiling means converting code into a format that is understandable by the machine indendent to 
// We didn't install Babel, but Parcel installed it
// Babel is a JavaScript compiler
// Babel is not created by FaceBook
// JSX -> React.createElement syntax -> React element -> JavaScript Object -> after rendering -> DOM element
// Babel also converts moder ES6 code into Browser compatible JavaScript

// PROOF THAT JSX IS NOT HTML 
// we have class attribute in HTML
// but we have className attribute in JSX
// we have tabindex attribue in HTML
// but we have tabIndex attribute in HTML

// SINGLE LINE JSX and MULTI LINE JSX
// for writing single line jsx we don't need ()
// but we need them for multi line comments
// so that Babel understands where JSX code is starting and where JSX code is ending

// RENDERING A JSX element is SIMILAR to RENDERING a react.createElement element

// CODE (JSX)
// const newElement1 = <h1>This is a heading ⚡</h1>;
// const newElement2 = React.createElement('h1',{},'This is a heading ⚡')
// const newElement3 = (
//     <div>
//         <h1>this is h1</h1>
//         <h2>this is h2</h2>
//     </div>
// )
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement3);
// console.log(newElement1); // this is same
// console.log(newElement2); // as this

// we WRITE CODE FIRST for HUMANS and THEN for MACHINES

// COMPONENTS
// everything in react is a component
// there are two types of components: functional components and class components
// a functional components is a function that returns a react element
// either in the from of jsx
// or in the form of react.createElement

// CODE (FUNCTIONAL COMPONENT)
// a) functional component using jsx (simple functions)
// const Heading1 = function(){
//     return <h1>This is a heading</h1>
// };
// b) functional component using jsx (arrow functions)
// const Heading2 = () => <h1>This is a heading</h1>;
// c) functional component using react.createElement (normal functions)
// const Heading3 = function(){
//     return React.createElement('h1',{},'this is also a heading');
// };
// d) functional component using react.createElement (arrow functions)
// const Heading4 = () => React.createElement('h1',{},'this is also a heading');
// e) functional component using react.createElement (arrow function) (multline jsx)
// const Heading5 = () => {
//     return (
//         <div>
//             <h1>this is h1</h1>
//             <h2>this is h2</h2>
//         </div>
//     )
// }
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// // rootElement.render(<Heading5/>);
// // rootElement.render(<Heading5></Heading5>);
// rootElement.render(Heading5());

// WAYS TO RENDER A FUNCTIONAL COMPONENT
// rootElement.render(<Heading5/>);
// rootElement.render(<Heading5></Heading5>);
// rootElement.render(Heading5());

// CODE (COMPONENT COMPOSITION)
const a = 2;
const SubElement1 = () => {
    return (
        <h1>This is h1</h1>
    );
};
const SubElement2 = () => {
    return (
        <h2>This is h2</h2>
    );
};
const SubElement3 = React.createElement('h1',{},'this is a react element');
const MainElement = () => {
    return (
        <div>
            <SubElement1/>
            <SubElement2/>
            <SubElement1></SubElement1>
            <SubElement2></SubElement2>
            {SubElement1()}
            {SubElement2()}
            {console.log('hahahaha')}
            {a}
            {SubElement3}
        </div>
    )
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<MainElement/>);

// JAVASCRIPT INSIDE JSX
// yes! we just need to use {}

// SECURITY FEATURE
// if {} contained some malicious code
// some sort of SQL injection
// but React first sanitizes the content inside {} and then executes it
// this attack might be a cross sight scripting
// jsx does something called escaping
// jsx prevents CROSS SIGHT SCRIPTING

// HOMEWORK
// attribute which are different in HTML and JSX