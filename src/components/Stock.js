import React from "react";
import Graph from './Graph'
import Table from "./Table";
import { MockData } from "./MockData";
import { ResponseData } from "./ParseReponseData";


const PRICE_MAX_LIMIT = 150
const SOCIAL_MAX_LIMIT = 10
const LIMIT_Divider = 3

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'',
            stockChartXValues: [], // dates
            stockChartPriceYValues: [], // prices
            stockchartSocialYValues: [], // Social media values
            recommandStatus: [] // Recommadations for day(sell/buy/hold)
        }
        // Events to handle the input
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.fetchMockData();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const cat = document.getElementById("stock_name").innerHTML =  this.state.value;
        this.setState.value = cat;
        this.fetchMockData();
        event.preventDefault();
      }
    
    // Getting mock data
    fetchMockData() {
        let responseData = MockData({PRICE_MAX_LIMIT: PRICE_MAX_LIMIT, SOCIAL_MAX_LIMIT: SOCIAL_MAX_LIMIT});
        
        let parseData =   ResponseData({reponseData:responseData,SOCIAL_MAX_LIMIT: SOCIAL_MAX_LIMIT, PRICE_MAX_LIMIT: PRICE_MAX_LIMIT, limit_divider: LIMIT_Divider});
        this.setState({
            stockChartXValues: parseData['stockChartXValuesFunction'],
            stockChartPriceYValues: parseData['stockChartYPriceValuesFunction'],
            stockchartSocialYValues: parseData['stockChartYSocialValuesFunction'],
            recommandStatus: parseData['stock_recommand_status']

        })
    }

   

    render() {
        return (
            <div>
                <h1>Stock Market Recommander</h1>
                <h4>Stock Symbol: <span id="stock_name">MSFT</span></h4>
                <div>
               <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                    <button type="submit" className="form-control btn btn-whatever" >Select Stock</button>
                </form>
                    
                </div>

                
                <h4>Prices(15 days)</h4>
                <Graph data = {[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartPriceYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                }]}/>


                 <h4>Social media Count(15 days)</h4>
                 <Graph data = {[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockchartSocialYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                }]} />


                <h4>Recommandation</h4>
                <Table headCell = {['Date','Status']} data = { this.state.recommandStatus} />
            </div>
        )
    }
}

export default Stock;