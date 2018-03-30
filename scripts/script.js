var i = 0;

var list = [
  "Humans help Humans",
  "Humans help animals",
  "Humans can help anyone who accepts",
  "This is what makes us human",
  "किसी के काम जो आये...",
  "उसे इन्सान कहते हैं"
];

class Head extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <a href="index.html" className="navbar-brand">betterWorld</a>
        <button className="navbar-toggler" data-toggle="collapse" data-target='#navbarCollapse'>
        <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      being: list[0]
    };
  }

  componentDidMount() {
    var self = this;
    setInterval(function () {
      if (i < list.length) i++;
      if (i === list.length) i = 0;
      self.setState({
        being: list[i]
      });
    }, 1300);
  }

  render() {
    return (
      <div className="container-fluid">
        <Head />
        <div className="row center">
          <h1>{this.state.being}</h1>
        </div>
        <div className="contact row">
          <a className="col" href="contact.html">Contact Us</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<World />, document.getElementById("root"));