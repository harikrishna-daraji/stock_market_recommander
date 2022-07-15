import React from "react";

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const API_KEY = 'KWJVITAD5OCZK7TS';
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&outputsize=full&apikey=${API_KEY}`;

        fetch(API_Call)
            .then()
            .then()

    }

    render() {
        return (
            <div>
                <h1>Stock</h1>
            </div>
        )
    }
}

export default Stock;