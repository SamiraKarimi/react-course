function getMood() {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
  render() {
    return <h1>My number is : {getMood()}</h1>;
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
