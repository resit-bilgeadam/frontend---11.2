const appContainer = document.querySelector("#app");

const title = React.createElement(
  "h1",
  { className: "title", id: "main-title" },
  "HELLO REACT"
);

const button = React.createElement(
  "button",
  { className: "btn", type: "button" },
  "Click me!"
);

const container = React.createElement("div", { className: "container" }, [
  title,
  button,
]);

ReactDOM.render(container, appContainer);
