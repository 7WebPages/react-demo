var MyBlock = React.createClass({

  getInitialState: function(){
    return {
      jokeText: null
    }
  },

  fetchJoke: function(){
    var _this = this;
    $.getJSON('http://api.icndb.com/jokes/random', function(data){

      var jokeText = data.value.joke;
      _this.setState({jokeText: jokeText});

    }) 
  },

  componentDidMount: function(){
    this.fetchJoke();
  },

  render: function(){

    return (
      <div >
        <h2>{this.state.jokeText}</h2>
      </div>
    )

  }

});


ReactDOM.render(
  <MyBlock />,
  document.getElementById('content')
);
