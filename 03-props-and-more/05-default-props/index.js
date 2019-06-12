class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Shaina" from="Samira" bangs={4} />
        <Hello to="Ela" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
