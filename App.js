const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello i am from react!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
