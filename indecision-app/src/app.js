console.log("App.js is running!");

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);
var approot = document.getElementById("app");

ReactDOM.render(template, approot);