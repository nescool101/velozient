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
            favorite: '',
            url: '',
            folder: '',
            username: '',
            password: '',
            notes: '',
            advancedSettings: ''
        }
        this.changeNameHandler =
            this.changeNameHandler.bind(this);
        this.changeCardTypeHandler =
            this.changeCardTypeHandler.bind(this);
        this.changeFavoriteHandler = this.changeFavoriteHandler.bind(this);
        this.changeUrlHandler = this.changeUrlHandler.bind(this); // Add changeUrlHandler
        this.changeFolderHandler = this.changeFolderHandler.bind(this); // Add changeFolderHandler
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this); // Add changeUsernameHandler
        this.changePasswordHandler = this.changePasswordHandler.bind(this); // Add changePasswordHandler
        this.changeNotesHandler = this.changeNotesHandler.bind(this); // Add changeNotesHandler
        this.changeAdvancedSettingsHandler = this.changeAdvancedSettingsHandler.bind(this); // Add changeAdvancedSettingsHandler
        this.saveOrUpdateCard = this.saveOrUpdateCard.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            CardService.getCardById(this.state.id).
            then((res) => {
                let card = res.data;
                this.setState({
                    name: card.name,
                    cardType: card.cardType,
                    favorite: card.favorite,
                    url: card.url,
                    folder: card.folder,
                    username: card.username,
                    password: card.password,
                    notes: card.notes,
                    advancedSettings: card.advancedSettings,

                });
            });
        }
    }
    saveOrUpdateCard = (e) => {
        e.preventDefault();
        let card = {
            name: this.state.name,
            cardType: this.state.cardType,
            favorite: this.state.favorite,
            url: this.state.url,
            folder: this.state.folder,
            username: this.state.username,
            password: this.state.password,
            notes: this.state.notes,
            advancedSettings: this.state.advancedSettings,
        };
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

    changeUrlHandler = (event) => {
        this.setState({ url: event.target.value });
    }

    changeFolderHandler = (event) => {
        this.setState({ folder: event.target.value });
    }

    changeUsernameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    changeNotesHandler = (event) => {
        this.setState({ notes: event.target.value });
    }

    changeAdvancedSettingsHandler = (event) => {
        this.setState({ advancedSettings: event.target.value });
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

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            isPasswordVisible: !prevState.isPasswordVisible,
        }));
    }

    copyPasswordToClipboard = () => {
        const passwordInput = document.getElementById('passwordInput');

        if (passwordInput) {
            passwordInput.select();
            document.execCommand('copy');
        }
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.changeNameHandler}
                                            autoComplete="new-name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Card Type:</label>
                                        <input
                                            placeholder="Card Type"
                                            name="cardType"
                                            className="form-control"
                                            value={this.state.cardType}
                                            onChange={this.changeCardTypeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Favorite:</label>
                                        <input
                                            placeholder="Y/N"
                                            name="favorite"
                                            className="form-control"
                                            value={this.state.favorite}
                                            onChange={(event) => {
                                                const input = event.target.value.toUpperCase().substring(0, 1);
                                                this.setState({ favorite: input });
                                            }}
                                            maxLength={1}
                                            pattern="[YyNn]"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>URL:</label>
                                        <input
                                            placeholder="URL"
                                            name="url"
                                            className="form-control"
                                            value={this.state.url}
                                            onChange={this.changeUrlHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Folder:</label>
                                        <input
                                            placeholder="Folder"
                                            name="folder"
                                            className="form-control"
                                            value={this.state.folder}
                                            onChange={this.changeFolderHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            className="form-control"
                                            value={this.state.username}
                                            onChange={this.changeUsernameHandler}
                                            autoComplete="new-username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <div className="input-group">
                                            <input
                                                type={this.state.isPasswordVisible ? 'text' : 'password'}
                                                placeholder="Password"
                                                name="password"
                                                className="form-control"
                                                value={this.state.password}
                                                onChange={this.changePasswordHandler}
                                                required // Password field is required
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    onClick={this.togglePasswordVisibility}
                                                >
                                                    {this.state.isPasswordVisible ? 'Hide' : 'Show'}
                                                </button>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    onClick={this.copyPasswordToClipboard}
                                                >
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Notes:</label>
                                        <textarea
                                            placeholder="Notes"
                                            name="notes"
                                            className="form-control"
                                            value={this.state.notes}
                                            onChange={this.changeNotesHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Advanced Settings:</label>
                                        <input
                                            placeholder="Advanced Settings"
                                            name="advancedSettings"
                                            className="form-control"
                                            value={this.state.advancedSettings}
                                            onChange={this.changeAdvancedSettingsHandler}
                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateCard}>
                                        Save
                                    </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>
                                        Cancel
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
