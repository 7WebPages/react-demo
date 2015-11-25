var MyBlock = React.createClass({

  getInitialState: function(){
    return {
      jokeText: null
    }
  },

  fetchJoke: function(){
    var _this = this;
    _this.setState({jokeText: 'Loading..'});
    $.getJSON('http://api.icndb.com/jokes/random', function(data){

      var jokeText = data.value.joke;
      _this.setState({jokeText: jokeText});

    }) 
  },
  refreshJoke: function(){
    this.fetchJoke();
  },

  componentDidMount: function(){
    this.fetchJoke();
  },

  render: function(){

    return (
      <div >
        <h2>{this.state.jokeText}</h2>
        <button onClick={this.refreshJoke}>Refresh</button>
      </div>
    )

  }

});


ReactDOM.render(
  <MyBlock />,
  document.getElementById('content')
);
