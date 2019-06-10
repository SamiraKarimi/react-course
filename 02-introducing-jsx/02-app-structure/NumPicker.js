function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your number is : {num}</h1>
        <p>{num === 7 ? "CONGRATS YOU WIN!" : "Sorry You Lose!"}</p>
        {num === 7 ? (
          <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
        ) : null}
      </div>
    );
  }
}
