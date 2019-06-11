class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine n1="🍎" n2="🍇" n3="🍓" />
        <Machine n1="🍇" n2="🍇" n3="🍇" />
        <Machine n1="🍊" n2="🥑" n3="🍍" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
