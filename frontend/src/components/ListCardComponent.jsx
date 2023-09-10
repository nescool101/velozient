import React, { Component } from 'react'
import CardService from '../services/CardService'

class ListCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                cards: []
        }
        this.addCard = this.addCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard(id){
        CardService.deleteCard(id).then(res => {
            this.setState({cards: 
                this.state.cards.
                filter(card => card.id !== id)});
        });
    }
    viewCard(id){
        this.props.history.push(`/view-card/${id}`);
    }
    editCard(id){
        this.props.history.push(`/add-card/${id}`);
    }

    componentDidMount(){
        CardService.getCards().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-card/_add');
            }
            this.setState({ cards: res.data});
        });
    }

    addCard(){
        this.props.history.push('/add-card/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">
                     Cards List</h2>
                 <div className = "row">
                    <button className="btn btn-primary"
                     onClick={this.addCard}> Add Card</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className 
                        = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Card  Name</th>
                                    <th> Card Type</th>
                                    <th> Favorite </th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cards.map(
                                        card =>
                                        <tr key = {card.id}>
                                   <td> { card.name} </td>
                                   <td> {card.cardType}</td>
                                   <td> {card.favorite}</td>
                                             <td>
                      <button onClick={ () => 
                          this.editCard(card.id)}
                               className="btn btn-info">Update 
                                 </button>
                       <button style={{marginLeft: "10px"}}
                          onClick={ () => this.deleteCard(card.id)}
                             className="btn btn-danger">Delete 
                                 </button>
                       <button style={{marginLeft: "10px"}} 
                           onClick={ () => this.viewCard(card.id)}
                              className="btn btn-info">View 
                                  </button>
                                    </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListCardComponent
