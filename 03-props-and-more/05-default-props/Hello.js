class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangs: 1
  };
  render() {
    const { to, from, bangs } = this.props;
    const numBangs = "!".repeat(bangs);
    console.log(this.props);
    return (
      <h1>
        Hi {to} from {from}
        {numBangs}
      </h1>
    );
  }
}
