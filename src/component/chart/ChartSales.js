import React, { Component } from "react";
import axios from "../config/api/axios";

const ChartAPI = 'API/Dashboard/GetSalesByRangeDate?withCompare=true&comparison=ly&withDetail=true'

class ChartSales extends Component{

    constructor(){
        super()
        this.state = {
            chartData:{}
        }
    }

    componentDidMount(){
        this.getChartData()
    }

    getChartData(){
        axios.get(ChartAPI).then(response => {
            const cekcek = response.data
            let labels = [response.data?.tgl]
            let data = []
            cekcek.forEach(element => {
                labels.push(element.labels)
                data.push(element.data?.tgl)
                data.push(element.data?.am)
                data.push(element.data?.tglCompare)
                data.push(element.data?.amCompare)
            });
            console.log(cekcek);
            this.setState({
                chartData: {
                    labels : labels,
                    datasets : [
                        {
                            labels :'Tanggal',
                            datasets : data,
                            backgroundColor: [
                                
                            ]
                        }
                    ]
                }
            })
        })
    }

    render(){
        return(
            <>
            
            </>
        )
    }
}

export default ChartSales