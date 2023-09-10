import React, { Component } from 'react'
import CardService from '../services/CardService'

class ViewCardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            card: {}
        }
    }

    componentDidMount(){
        CardService.getCardById(this.state.id).then(res => {
            this.setState({card: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> 
                    View Card Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Card Name: </label>
                            <div> { this.state.card.name }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Card Type: </label>
                            <div> { this.state.card.cardType }
                            </div>
                        </div>
                        <div className = "row">
                            <label> Favorite : </label>
                            <div> { this.state.card.favorite }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCardComponent
