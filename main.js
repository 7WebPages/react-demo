var MyBlock = React.createClass({

  getInitialState: function(){
    return {
      jokeText: null,
      isLoading: false
    }
  },

  fetchJoke: function(){
    var _this = this;
    this.setState({isLoading: true});
    $.getJSON('http://api.icndb.com/jokes/random', function(data){

      var jokeText = data.value.joke;
      _this.setState({jokeText: jokeText});
      _this.setState({isLoading: false});

    }) 
  },
  refreshJoke: function(){
    this.fetchJoke();
  },

  componentDidMount: function(){
    this.fetchJoke();
  },

  render: function(){

    var loadingNode = null;
    if(this.state.isLoading){
      loadingNode = (<img src="ajax-loader.gif" />);
    }

    return (
      <div >

        <button className="btn btn-lg" onClick={this.refreshJoke}>
          Refresh
        </button>
        {loadingNode}

        <h2>{this.state.jokeText}</h2>
      </div>
    )

  }

});


ReactDOM.render(
  <MyBlock />,
  document.getElementById('content')
);
