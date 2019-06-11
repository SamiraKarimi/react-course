class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Shaina"
          from="Sammy"
          bangs={4}
          img="https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
