const heading = React.createElement(
  "div",
  { id: "red" },
  React.createElement(
    "div",
    { id: "blue" },
    React.createElement("h1", {}, "Hi Heading")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
