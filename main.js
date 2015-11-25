var MyBlock = React.createClass({

  getInitialState: function(){
    return {
      isExpanded: false
    }
  },

  handleClick: function(){
    this.setState({isExpanded: true});
  },

  render: function(){
    var _this = this;
    var shortContent =  (
      <div onClick={this.handleClick}>
        <h2>Hello, world from component!</h2>
      </div>
    )
    var fullContent = (
      <div>
        <h2>Hello, world from component!</h2>
        <p>Some long description</p>
      </div>
    )

    if(this.state.isExpanded){
      return fullContent;
    }else{
      return shortContent;
    }
  }

});


ReactDOM.render(
  <MyBlock />,
  document.getElementById('content')
);
