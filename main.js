var MyBlock = React.createClass({

  getInitialState: function(){
    return {
      isExpanded: false
    }
  },

  handleClick: function(){
    this.setState({isExpanded: !this.state.isExpanded});
  },

  render: function(){

    var extraContent = null;
    if(this.state.isExpanded){
      extraContent = (<p>Some long description</p>);
    }

    return (
      <div onClick={this.handleClick}>
        <h2>Hello, world from component!</h2>
        {extraContent}
      </div>
    )

  }

});


ReactDOM.render(
  <MyBlock />,
  document.getElementById('content')
);
