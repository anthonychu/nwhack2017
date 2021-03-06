class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calorie: 0,
      price: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event){
     alert('Informations are submitted');
     event.preventDefault();

     var data = {
        calorie : this.ref.calorie.getDOMNode().value,
        price : this.ref.price.getDOMNode().value,
     }
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <h1>Calorie Randomizer for Everyone </h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Calorie:
          <input
            name="calorie"
            type="number"
            ref="calorie"
            value={this.state.calorie}
            onChange={this.handleInputChange} />
        </label>
        <br /><br/>
        <label>
          Price:
          <input
            name="price"
            type="number"
            ref="price"
            value={this.state.price}
            onChange={this.handleInputChange} />
        </label><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
