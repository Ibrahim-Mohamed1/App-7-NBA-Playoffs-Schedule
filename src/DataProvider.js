import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state={
            data: []
        }
    }

    getData = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        console.log(yyyy)
    
        if (dd < 10) {
          dd = '0' + dd
        }
    
        if (mm < 10) {
          mm = '0' + mm
        }
    
        today = yyyy + '-' + mm + '-' + dd;

        axios.get(`https://www.balldontlie.io/api/v1/games?per_page=100&season[]=${yyyy}&start_date=${today}`).then(res => {
            this.setState({
                data: res.data.data
            })
        }).catch(function (error) { 
            window.location.reload() 
        });
    }

    render() {
        return (
            <Provider value={{
                getData: this.getData,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}