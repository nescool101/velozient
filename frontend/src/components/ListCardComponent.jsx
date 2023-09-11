import React, { Component } from 'react';
import CardService from '../services/CardService';

class ListCardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            searchQuery: '',
            searchResult: '',
        };

        this.addCard = this.addCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard(id) {
        CardService.deleteCard(id).then((res) => {
            this.setState({
                cards: this.state.cards.filter((card) => card.id !== id),
            });
        });
    }

    viewCard(id) {
        this.props.history.push(`/view-card/${id}`);
    }

    editCard(id) {
        this.props.history.push(`/add-card/${id}`);
    }

    componentDidMount() {
        CardService.getCards().then((res) => {
            if (res.data == null) {
                this.props.history.push('/add-card/_add');
            }
            this.setState({ cards: res.data });
        });
    }

    addCard() {
        this.props.history.push('/add-card/_add');
    }

    getCardInfo() {
        CardService.getCardByName(this.state.searchQuery).then((res) => {
            if (res.data) {
                // Card found
                this.setState({ searchResult: `Found card: ${res.data.name}` });
            } else {
                // Card not found
                this.setState({ searchResult: `No card found with the name: ${this.state.searchQuery}` });
            }
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Cards Finder</h2>
                <h2 className="text-center">Cards Finder</h2>
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            placeholder="Search by Card Name"
                            name="searchQuery"
                            className="form-control"
                            value={this.state.searchQuery}
                            onChange={(event) => this.setState({ searchQuery: event.target.value })}
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={() => this.getCardInfo()} // Trigger getCardInfo function
                    >
                        Find Card by Name
                    </button>
                    <div className="row">
                        <div className="col-md-6">
                            <p>{this.state.searchResult}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCard}>
                        Add Card
                    </button>
                </div>
                <br />
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>Card Name</th>
                            <th>Card Type</th>
                            <th>Favorite</th>
                            <th>URL</th>
                            <th>Folder</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Notes</th>
                            <th>Advanced Settings</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.cards.map((card) => (
                            <tr key={card.id}>
                                <td>{card.name}</td>
                                <td>{card.cardType}</td>
                                <td>{card.favorite}</td>
                                <td>{card.url}</td>
                                <td>{card.folder}</td>
                                <td>{card.username}</td>
                                <td>{card.password}</td>
                                <td>{card.notes}</td>
                                <td>{card.advancedSettings}</td>
                                <td>
                                    <button
                                        onClick={() => this.editCard(card.id)}
                                        className="btn btn-info"
                                    >
                                        Update
                                    </button>
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => this.deleteCard(card.id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => this.viewCard(card.id)}
                                        className="btn btn-info"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <h2 className="text-center">Cards List</h2>
                {/* ... Rest of the code for displaying cards ... */}
            </div>
        );
    }
}

export default ListCardComponent;
