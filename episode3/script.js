import React from "react";
import ReactDOM from "react-dom/client";
// const newElement = React.createElement
//     (
//     'h1',
//     {
//         id: 'heading',
//         key: 'head1',
//     },
//     'this is a heading, made using react and parcel HMR is working'
//     );
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);
// console.log(newElement)
// console.log(rootElement)

// TASK 1
// creating a script for making a dev build
// "start": "parcel index.html"
// useing this script: npm rum start
// we can also use npm start
// creating a script for making a prod build
// "build": "parcel build index.html"
// useing this script: npm rum build

// ABOUT REACT ELEMENT
// react element is not an HTML element
// it is a javascript object
// when we render this react element into the DOM it becomes an HTML element

// PROBLEMS WITH REACT.CREATEELEMENT and REACTDOM.CREATEROOT
// writing them is cumber some
// to solve this comes JSX
// but these methods are part of core react

// JSX
// was developed by facebook developers
// react can be written without jsx
// jsx is not a part of react
// but using jsx makes our work easier
// using jsx we merge HTML and JavaScript code into a single file, so that we don't have to juggle between html and js files
// JSX CODE:
// const newElement = <h1 id="head1" >this is episode3</h1>
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);
// console.log(newElement)
// console.log(rootElement)
// jsx is not HTML inside JavaScript
// jsx is an HTML like syntax
// jsx is XML like syntax
// BTS jsx is converted into React.createElement syntax which is then converted into JavaScript Object
// element created using jsx needs to be rendered the same way in which we render element created using react.createelement
// jsx is not natively supported by the browsers

// JSX to REACT.CREATEELEMENT (by babel) to JavaScript Object 
// REACT.CREATEELEMENT to JavaScript Object
// now when this javascript object is renderd, an HTML element is creaetd out of it

// BABEL
// converts jsx to react.createelement
// converts es6 code to browser compatible javascript code (for older browsers)

// ATTRIBUTE IN JSX
// are little different from attribute in HTML
// class is used in HTML , className is used in JSX

// SINGLE LINE JSX
// const newElement = <h1 id="head1" >this is episode3</h1>
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);
// console.log(newElement)
// console.log(rootElement)
// MULTI LINE JSX
// const newElement = (<h1 id="head1" className="heading1">
//     this is episode3
//     </h1>);
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);
// console.log(newElement)
// console.log(rootElement)

// COMPONENTS
// there are two types of components: functional and class
// functional is new way (they use functions)
// class is old way (they use classes)
// a functional component is a normal javascript function that returns some jsx
// name of functional component should start with capital letters
// components is renderd in a different way: either <NewElement/> or NewElement();
// USING FUNCTION COMPOENTS (USING NORMAL FUNCTIONS)
// const NewElement = function(){
//     return <h1>this is heading for episode 3.</h1>
// };
// USING FUNCIONAL COMPOENTS (USING ARROW FUNCTIONS WITHOUT RETURN KEYWORD)
// const NewElement = () => <h1>this is a heading for episode 3</h1> 
// USING FUNCTIONAL COMPONENTS (USING ARROW FUNCTION WITHOUT RETURN KEYWORD, USING () FOR MULTILINE RETURN STAEMENT) 
// const NewElement = () => (
//     <div>
//         <h1> this is a heading for episode 3 </h1>
//     </div>
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<NewElement />);
// rootElement.render(NewElement());
// we don't use the return statement in arrow functions if we have only one statement

// WE CAN HAVE A FUNCTIONAL COMPONENT INSIDE ANOTHER FUNCTIONAL COMPONENT AND WE CAN HAVE REACT ELEMENTS INSIDE FUNCTIONAL COMPONENTS
// this is called component composition
const InnerElement = (
    <h1>this is heading</h1>
);
const InnerElement1 = () => {
    return <h2>this is heading</h2>;
};
const InnerElement2 = () => {
    return <h3>this is heading</h3>;
};
const OuterElement = () => {
    return (<div>
        {InnerElement}
        <InnerElement1/>
        {InnerElement2()}
        <InnerElement1></InnerElement1>
    </div>);
};
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<OuterElement/>);

// WE CAN HAVE JAVASCRIPT INSIDE JSX
// we need to use {} for inserting javascript inside jsx
// 
// const episodeName = 'episode 3';
// const NewElement = () => {
//     return <h1>this is heading for {console.log("runing js which is present inside jsx")} {episodeName}</h1>;
// };
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<NewElement/>);

// SECURITY FEATUR OF {}
// {} prevents us from XSS by santizing code

// JSX MAKE OUR CODE READABLE