import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body1 from "./components/Body1.js";
import Body2 from "./components/Body2.js";

// MAIN COMPONENT (APPLAYOUT)
const AppLayout = () => {
    return (
        <div className="app border-white border-2 border-solid">
            <Header />
            {/* <Body1 /> */}
            <Body2 />
        </div>
    )
};

// TARGETING THE ROOTELEMENT
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// RENDER THE APPLAYOUT
rootElement.render(<AppLayout />);