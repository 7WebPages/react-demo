var MyBlock = React.createClass({

  getInitialState: function(){
    return {
    }
  },

  fetchJoke: function(){
    $.getJSON('http://api.icndb.com/jokes/random', function(data){
      console.log(data);
    }) 
  },

  componentDidMount: function(){
    this.fetchJoke();
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
