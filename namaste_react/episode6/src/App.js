import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// MAIN COMPONENT (APPLAYOUT)
const AppLayout = () => {
    return (
        <div className="app border-white border-2 border-solid">
            <Header />
            <Body />
        </div>
    )
};

// TARGETING THE ROOTELEMENT
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// RENDER THE APPLAYOUT
rootElement.render(<AppLayout />);