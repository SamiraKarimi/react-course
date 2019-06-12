class Machine extends React.Component {
  render() {
    const { n1, n2, n3 } = this.props;
    const winner = n1 === n2 && n1 === n3;
    const styles = { fontSize: "50px", backgroundColor: "purple" };

    return (
      <div className="Machine">
        <p style={styles}>
          {n1} {n2} {n3}
        </p>
        <p className={winner ? "win" : "lose"}>
          {winner ? "Winner!" : "Loser!"}
        </p>
      </div>
    );
  }
}
