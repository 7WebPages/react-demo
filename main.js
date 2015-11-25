var MyBlock = React.createClass({
  render: function(){
    return (
      <h2>Hello, world from component!</h2>
    )
  }
});


ReactDOM.render(
  <MyBlock />,
  document.getElementById('content')
);
