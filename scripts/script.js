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
      <div className="topnav" id="myTopnav">
  <a>BetterWorld</a>
  <a href="contact.html">Contact</a>
  <a href="about.html">About</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>&#9776;</a>
</div>
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

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}