var i = 0;

var list = [
  "Humans help Humans",
  "Humans help animals",
  "Humans can help anyone who accepts",
  "This is what makes us human"
];

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      being: list[0]
    };
  }

  componentDidMount() {
    var self = this;
    setInterval(function() {
      if (i < list.length) i++;
      if (i === list.length) i = 0;
      self.setState({
        being: list[i]
      });
    }, 1300);
  }
  render() {
    return (
      <div>
        <h1>{this.state.being}</h1>
        <a href="contact.html">Contact Us</a>
      </div>
    );
  }
}

ReactDOM.render(<World />, document.getElementById("root"));
