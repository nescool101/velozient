import React, { Component } from 'react';
import CardService from '../services/CardService';

class ViewCardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            card: {},
        };
    }

    componentDidMount() {
        CardService.getCardById(this.state.id).then((res) => {
            this.setState({ card: res.data });
        });
    }

    render() {
        const { name, cardType, favorite, url, folder, username, password, notes, advancedSettings } = this.state.card;

        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Card Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Card Name:</label>
                            <div>{name}</div>
                        </div>
                        <div className="row">
                            <label>Card Type:</label>
                            <div>{cardType}</div>
                        </div>
                        <div className="row">
                            <label>Favorite:</label>
                            <div>{favorite}</div>
                        </div>
                        <div className="row">
                            <label>URL:</label>
                            <div>{url}</div>
                        </div>
                        <div className="row">
                            <label>Folder:</label>
                            <div>{folder}</div>
                        </div>
                        <div className="row">
                            <label>Username:</label>
                            <div>{username}</div>
                        </div>
                        <div className="row">
                            <label>Password:</label>
                            <div>{password}</div>
                        </div>
                        <div className="row">
                            <label>Notes:</label>
                            <div>{notes}</div>
                        </div>
                        <div className="row">
                            <label>Advanced Settings:</label>
                            <div>{advancedSettings}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCardComponent;
