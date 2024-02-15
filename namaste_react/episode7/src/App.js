import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Body1 from "./components/Body1.js";
import Body2 from "./components/Body2.js";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import ErrorComp from "./components/ErrorComp.js";

// MAIN COMPONENT (APPLAYOUT)
const AppLayout = () => {
    return (
        <div className="app border-white border-2 border-solid">
            <Header />
            {/* <Body1 /> */}
            {/* <Body2 /> */}
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body2 />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ],
        errorElement: <ErrorComp />
    },
])

// TARGETING THE ROOTELEMENT
const rootElement = ReactDOM.createRoot(document.getElementById('root'));

// RENDER THE APPLAYOUT
// rootElement.render(<AppLayout />);

// RENDERING THE ROUTING CONFIGURATION
rootElement.render(<RouterProvider router={appRouter} />)