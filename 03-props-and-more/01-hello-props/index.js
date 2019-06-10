class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Shaina" from="Sammy" />
        <Hello to="Ela" from="Greg" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
