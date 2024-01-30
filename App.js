const heading = React.createElement
(
    "h1", 
    {id: "heading", abc: "xyz"}, 
    "Namaste India Using ReactJS"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);