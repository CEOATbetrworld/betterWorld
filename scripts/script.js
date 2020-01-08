var i = 0;

// var list = [
//     "Humans help Humans",
//     "Humans help animals",
//     "Humans can help anyone who accepts",
//     "This is what makes us human",
//     "किसी के काम जो आये...",
//     "उसे इन्सान कहते हैं"
// ];

class Head extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
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

class Jumbo extends React.Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Humans help Humans</h1>
                    <p className="lead">Only we can make this world better</p>
                    <p className="lead">'Never doubt that a small group of thoughtful,concerned citizens can change the world. Indeed, it's the only thing that ever has' - Margaret Mead</p>
                </div>
            </div>
        )
    }
}

class Contributions extends React.Component {
    render() {
        return (
             <div>
            <h3>Contributions Till Date </h3>
            <div className="card" style={{"width": "18rem"}}>
                <img className="card-img-top" src="images/arohi.jpg" alt="News Photo" />
                <div className="card-body">
                    <h5 className="card-title">Spread Awareness for Arohi's Help</h5>
                    <p className="card-text"></p>
                    <label for="Status">Status : </label>
                    <a href="#" className="btn btn-success" id="status">Completed Successfully</a>
                </div>
            </div>
            </div>)
    }
}

class World extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     being: list[0]
        // };
    }

    // componentDidMount() {
    //     var self = this;
    //     setInterval(function () {
    //         if (i < list.length) i++;
    //         if (i === list.length) i = 0;
    //         self.setState({
    //             being: list[i]
    //         });
    //     }, 1300);
    // }

    render() {
        return (
            <div className="container-fluid">
                <Head />
                <Jumbo />
                <Contributions />
                {/* <div className="row center">
                    <h1>{this.state.being}</h1>
                </div> */}
                <div className="contact row">
                    <a className="col" href="contact.html">Contact Us</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<World />, document.getElementById("root"));