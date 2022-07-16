import React from "react";
import Plot from 'react-plotly.js';

class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'',
            stockChartXValues: [],
            stockChartPriceYValues: [],
            stockchartSocialYValues: [],
            recommandStatus: []
        }
    }

    componentDidMount() {
        this.fetchMockData();
    }

    
    parseResponseData(reponseData) {
        const pointerToThis = this;
        console.log(pointerToThis);

        let stockChartXValuesFunction = [];
        let stockChartYPriceValuesFunction = [];
        let stockChartYSocialValuesFunction = [];
        let stock_recommand_status = [];

        for(var key in reponseData) {
            stockChartXValuesFunction.push(key);
            stockChartYPriceValuesFunction.push(reponseData[key]['open']);
            stockChartYSocialValuesFunction.push(reponseData[key]['social_count'])
            stock_recommand_status.push(this.generateRecommandationAlgorithm(reponseData[key]['open'],reponseData[key]['social_count']));
        }

        pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartPriceYValues: stockChartYPriceValuesFunction,
            stockchartSocialYValues: stockChartYSocialValuesFunction,
            recommandStatus: stock_recommand_status

        })

    }


    // Getting mock data
    fetchMockData() {
        let stock_Symbol = 'AMZN';

        let responseData = this.getMockData();
        this.parseResponseData(responseData);
    }

    // backend call
    fetchStock() {
     // Uncomment the following and add URL to get data from  backend
        /*let API_Call = ``;
        fetch(API_Call)
            .then(
                function(respnse) {
                    return respnse.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                
                }
            )    */    
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        document.getElementById("demo").innerHTML = this.state.value;
        this.fetchMockData();
    }

    getMockData() {
        let mockData = {
            '2022-07-16': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
             },
            '2022-07-15': {
               'open': Math.random() * 150,
               'social_count': Math.random() * 10
            },            
            '2022-07-14' :{
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-13': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            }, 
            '2022-07-12': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-11': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-10': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-09': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-08': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-07': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-06': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
            '2022-07-05': {
                'open': Math.random() * 150,
                'social_count': Math.random() * 10
            },
        }
        
        return mockData;
    }

    generateRecommandationAlgorithm(price,social_count) {
        return 'sell';
    }

    render() {
        return (
            <div>
                <h1>Stock Market Recommander</h1>
                <h4>Stock Symbol: <span id="demo">MSFT</span></h4>
                <div className="form-group">
               <form>
                    <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                        <button type="submit" >Show</button>
                </form>
                    
                </div>
                <h4>Prices(15 days)</h4>
                <Plot
                    data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartPriceYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    
                    ]}
                    layout={{width: 720, height: 440}}
                />
                 <h4>Social media(15 days)</h4>
                 <Plot
                    data={[
                    {
                        x: this.state.stockChartXValues,
                        y: this.state.stockchartSocialYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    
                    ]}
                    layout={{width: 720, height: 440}}
                />
                <h4>Recommandation</h4>
                
            </div>
        )
    }
}

export default Stock;