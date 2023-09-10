import React, { Component } from 'react'
import CardService from '../services/CardService';

class CreateCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            cardType: '',
            favorite: ''
        }
        this.changeNameHandler =
            this.changeNameHandler.bind(this);
        this.changeCardTypeHandler =
            this.changeCardTypeHandler.bind(this);
        this.saveOrUpdateCard =
            this.saveOrUpdateCard.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            CardService.getCardById(this.state.id).
            then((res) => {
                let Card = res.data;
                this.setState({
                    name: Card.name,
                    cardType: Card.cardType,
                    favorite: Card.favorite
                });
            });
        }
    }
    saveOrUpdateCard = (e) => {
        e.preventDefault();
        let card = { name: this.state.firstName, cardType:
             this.state.cardType, favorite: this.state.favorite };
        console.log('card => ' + JSON.stringify(card));

        // step 5
        if (this.state.id === '_add') {
            CardService.createCard(card).then(res => {
                this.props.history.push('/cards');
            });
        } else {
            CardService.
            updateCard(card, this.state.id).then(res => {
                this.props.history.push('/cards');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeCardTypeHandler = (event) => {
        this.setState({ cardType: event.target.value });
    }

    changeFavoriteHandler = (event) => {
        this.setState({ favorite: event.target.value });
    }

    cancel() {
        this.props.history.push('/cards');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Card</h3>
        } else {
            return <h3 className="text-center">Update Card</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
        <div className="container">
            <div className="row">
               <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
            <div className="form-group">
              <label> Name: </label>
                <input placeholder="Name"
                  name="name" className="form-control"
                    value={this.state.name}
                      onChange={this.changeNameHandler} />
                          </div>
            <div className="form-group">
              <label> Card Type: </label>
                <input placeholder="Card Type"
                   name="lastName" className="form-control"
                     value={this.state.cardType}
                      onChange={this.changeCardTypeHandler} />
                                    </div>
            <div className="form-group">
                <label> Favorite : </label>
                    <input placeholder="Favorite"
                       name="favorite" className="form-control"
                        value={this.state.favorite}
                         onChange={this.changeFavoriteHandler} />
                                    </div>

             <button className="btn btn-success" 
                  onClick={this.saveOrUpdateCard}>Save
                    </button>
             <button className="btn btn-danger" 
                  onClick={this.cancel.bind(this)} 
                     style={{ marginLeft: "10px" }}>Cancel
                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCardComponent
