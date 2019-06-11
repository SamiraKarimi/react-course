class Machine extends React.Component {
  render() {
    const { n1, n2, n3 } = this.props;

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
