// const newElement = React.createElement
//     (
//     'h1',
//     {
//         id: 'heading',
//         key: 'head1',
//     },
//     'this is a heading, made using react'
//     );
// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(newElement);
// console.log(newElement);
// console.log(rootElement); 
// react was built with the philosophy that we want to manipulate our dom using javascript
// dom manipulation is a costly operation
// react tries to optimize this
// the second argument is used to give attributes to our tag
// the reactElement we created is actually an object with stuff inside it
// the render function is responsible for taking this object, making an HTML element out of it and putting it on the DOM

// TASK 4 CREATING NESTED STRUCTURE ALONGWITH SIBLING ELEMENTS USING REACT
const newElement = React.createElement(
    'div',
    {
        id: 'firstDiv',
        key: 'div1',
    },
    [
        React.createElement(
            'h1',
            {
                id: 'head1',
                key: 'heading1'
            },
            "first heading"
        ),
        React.createElement(
            'h2',
            {
                id: 'head2',
                key: 'heading2'
            },
            "second heading"
        )
    ]
);
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(newElement);
// we need to give a key attribute to all the react elements so that react can uniquely identify it
// using React.createElement is cumbersome
// jsx solves this problem
// react can be written wihtout jsx
// the react cdn links should be placed before we use them
// if something already existed in the root element, then it will be overrided
// any before and after the root element won't be touched, they will remain as they are
// we can use react inside a small part of our project
// because it's a library
