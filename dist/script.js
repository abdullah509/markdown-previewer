function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2
  
  -list item 1
  -list item 2
  -list item 3

  [Visit my portfolio]("https://codepen.io/abdullah509")

  This is a inline \'<div></div>\'

  This is a block of code
  
  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)


`;



class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });

    return (
      React.createElement("div", null,
      React.createElement("h2", { className: "text-center m-4" }, "Markdown Previewer"),
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-6" },
      React.createElement("h5", { className: "text-center" }, "Editor"),
      React.createElement("textarea", { id: "editor", className: " form-control p-2", value: text, onChange: this.handleChange })),


      React.createElement("div", { className: "col-6" },
      React.createElement("h5", { className: "text-center" }, "Previewer"),
      React.createElement("div", { className: "preview rounded p-2",
        dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })))));




  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));