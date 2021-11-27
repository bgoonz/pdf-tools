import React from "react";
import { render } from "react-dom";
import { Wrapper } from "./styles";

// A basic example
import Basic from "./Basic";

// Including line numbers
import WithLineNumbers from "./WithLineNumbers";

// Integration with react-simple-code-editor
import Editor from "./Editor";

const App = () => (
  <Wrapper>
    <h1>Welcome to prism-react-renderer!</h1>
    <Basic />
    <hr />
    <h2>With line numbers:</h2>
    <WithLineNumbers />
    <hr />
    <h2>Now for an editor example:</h2>
    <Editor />
    <hr />
    <h3>Changelog</h3>
    <p>v1.1.0 2020-03-10: Updated deps, added editor example</p>
  </Wrapper>
);

render(<App />, document.getElementById("root"));
