class Machine extends React.Component {
  render() {
    const { n1, n2, n3 } = this.props;
    const winner = (n1 === n2 && n2 === n3);

    return (
      <div>
        <p>{n1}{n2}{n3}</p>
       <p>{winner ? 'winner' : 'looser'}</p>
       <br/>
      </div>
    );
  }
}
