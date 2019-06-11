class Machine extends React.Component {
  render() {
    const n1 = this.props.n1;
    const n2 = this.props.n2;
    const n3 = this.props.n3;

    return (
      <div>
        <p>
          {n1} {n2} {n3}
        </p>
        {n1 === n2 && n1 === n3 ? "You win!" : "You lose!"}
      </div>
    );
  }
}
