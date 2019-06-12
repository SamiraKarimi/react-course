class App extends React.Component {
  render() {
    return (
      <div>
        <Friends name="Sara" hobbies={["swimming", "reading", "running"]} />
        <Friends name="Ela" hobbies={["Reading", "Drawing", "running"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
