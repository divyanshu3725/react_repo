// TASK 1
// - CREATE A NAMASTE REACT WEBPAGE USING HTML ONLY
// TASK 2
// - CREATE A NAMASTE REACT WEBPAGE USING JAVASCRIPT
// TASK 3
// - CREATE A NAMASTE REACT WEBPAGE USING REACT
// TASK 4
// - CREATE A NAMASTE REACT WEBPAGE USING REACT AND STORE THIS CODE INTO SEPARATE JAVASCRIPT FILE
// TASK 5
// - CREATE A NESTED SIBLING STRUCTURE USING  REACT

// HOW DO BROWSERS UNDERSTAND THESE METHODS
// - because browsers have a javascript engine in them

// BROWSERS DON'T UNDERSTAND REACT 

// ONE WAY TO GET REACT INTO OUR PROJECT IS USING CDN

// REACT CDN LINKS ACTUALLY CONTAIN JAVASCRIPT CODE

// FACEBOOK DEVELOPER ARE WRITING THIS REACT CODE

// WE CAN LOG THE REACT AND REACT-DOM INTO THE CONSOLE

// REACTELEMENT IS ACTUALLY A JAVASCRIPT OBJECT

// ABOUT THE TWO CDN LINKS:
// - first one is the react core
// - second one is the library which is useful for doing DOM operations 

// WHY THERE ARE TWO FILES?
// - because react works on various environment
// - react core library is used in each of that environment
// - plus an additional envrionment specific library is also used to finish the tasks (ReactDOM for browsers, ReactNative for mobile devices)

// REACTDOM
// - acts as a bridge between browsers and react

// REACT.CREATEELEMENT METHOD
// - takes three arguments
// - first argument is the name of the element
// - second argument is an object that contains the attributes and values as key value pairs
// - it's a core thing of react so it's in the core react library

// REACTDOM.CREATEROOT
// - new elements are rendered into a root 
// - it's not a core thing of react, creating a root element is the job of reactdom, so we need to use the reactdom library

// RENDERING
// - new elements are renderd into the root element

// const newElement = React.createElement(
//     'h1',
//     {},
//     'namaste india'
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);
// console.log(newElement);

// DOM MANIPULATIOIN IS A COSTLY OPERATION 
// - and all the libraries are trying to optimize this

// THE SECOND ARGUMENT IN THE REACT.CREATEELEMENT
// const newElement = React.createElement(
//     'h1',
//     {
//         id: 'head1',
//         className: 'elems',
//         title: 'a heading'
//     },
//     'namaste india'
// );
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);
// console.log(newElement);

// REACTELEMENT
// - is an object
// - containg some data
// - the attributes are stored inside the props key

// RENDERING
// - the render function takes the reactelement object
// - creates a tag out of it
// - and puts it into the DOM

// NESTED SIBLING STRUCTURE CODE
const newElement = React.createElement(
    'div',
    {
        id: 'headerDiv',
        className: 'header',
        title: 'a heading'
    },
    [
        React.createElement(
            'h1',
            {
                id: 'head1',
                className: 'headings',
                key: 'key1'
            },
            'first heading'
        ),
        React.createElement(
            'h1',
            {
                id: 'head2',
                className: 'headings',
                key: 'key2'
            },
            'second heading'
        )
    ]
);
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(newElement);
console.log(newElement);

// BUT USING REACT.CRATEELEMENT AND REACTDOM.CREATEROOT AND RENDER
// - are making code ugly
// - solution is jsx
// - react can be written without jsx

// JSX
// - makes writing react code easy

// ORDER OF SCRIPTS MATTER
// - we need to have react before react dom 
// - we need to have them before our script

// IF ROOT ELEMENT HAS SOMETHING IN IT
// - then it will be replaced 
// - first the thing that the root has will be shown in the browser
// - but when the engine executes the script, the thing intside the root element is replaced

// WHAT ABOUT THE ELEMENTS OTHER THAN THE ROOT
// - they won't be touched

// REACT IS A LIBRARY
// - we can use it in a part of our project
// - so react is light

// HOMEWORK
// WHAT IS CDN?
// WHAT IS CROSS ORIGIN?
// WHAT DOES RENDERING A REACTELEMENT INTO THE ROOTELEMENT MEAN?
// WHY IS DOM MANIPULATION COSTLY
// EXPLORE THE OBJECT CREATED ON USING REACT.CREATEELEMENT METHOD
// WHAT'S THE MECHANISM BEHIND RENDER METHOD
// WHAT ARE THOSE PRODUCTION CDN LINKS