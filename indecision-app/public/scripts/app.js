"use strict";

console.log("App.js is running!");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "One"
        ),
        React.createElement(
            "li",
            null,
            "Two"
        )
    )
);
var approot = document.getElementById("app");

ReactDOM.render(template, approot);
