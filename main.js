var MyBlock = React.createClass({
  
  render: function(){
    return (
      <h2>Hello, world from component! {this.props.myparam1} </h2>
    )
  }
});


ReactDOM.render(
  <MyBlock myparam1="22" />,
  document.getElementById('content')
);
