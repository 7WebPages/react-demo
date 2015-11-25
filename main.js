var MyBlock = React.createClass({

  getInitialState: function(){
    return {
    }
  },

  componentDidMount: function(){
    alert(); 
  },

  render: function(){

    return (
      <div >
        <h2>I'm a placeholder</h2>
      </div>
    )

  }

});


ReactDOM.render(
  <MyBlock />,
  document.getElementById('content')
);
