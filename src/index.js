import React from "react";
import ReactDOM from "react-dom";
import Cars from "./screens/cars/cars";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="mt-5 ml-5">Cars</h1>
                <Cars/>
            </div>
        )
    }
}

let app = document.getElementById("app");

ReactDOM.render(<App/>, app);