var i = 0;
var list = ["Humans help Humans", "Humans help animals", "Humans can help anyone who accepts", "This is what makes us human"];

function World(props) {
    return <h1>{props.being}</h1>;
}

setInterval(function () {
    ReactDOM.render(<World being={list[i]} />, document.getElementById("root"));
    if (i < list.length) i++;
    if (i === list.length) i = 0;
}, 1500);
