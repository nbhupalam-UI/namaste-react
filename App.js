const heading = React.createElement(
  "h1",
  { id: "heading", "data-test": "test" },
  "Hello World from React!"
);

const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "Hello from Namaste React!"
);

const child = React.createElement("div", { id: "child" }, [heading, heading2]);
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
