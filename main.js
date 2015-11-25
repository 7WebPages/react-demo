var MyBlock = React.createClass({
  
  render: function(){
    var myhtml = (<h1>ahah</h1>);
    return (
      <h2>Hello, world from component! {this.props.myparam1} {myhtml}</h2>
    )
  }
});


ReactDOM.render(
  <MyBlock myparam1="22" />,
  document.getElementById('content')
);
