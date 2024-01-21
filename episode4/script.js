import React from "react";
import  ReactDOM from "react-dom/client";
const NewElement = () => <h1>This is new element</h1>;
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<NewElement/>);