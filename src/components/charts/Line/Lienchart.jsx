// import React,{useState , useEffect} from 'react';
import React from 'react'
import Chart from 'react-apexcharts';
// import ApexCharts from "react-apexcharts";


export default function Lienchart(props) {

  // const dates = ["04-2021", "05-2021", "06-2021", "07-2021", "08-2021", "09-2021", "10-2021", "11-2021", "12-2021"] ;
  const data = [62 , 58 , 64, 62, 53, 55, 57, 61] ;

   
  const dates  =  ["2021-04-01", "2021-05-01", "2021-06-01", "2021-07-01", "2021-08-01" , "2021-09-01", "2021-10-01", "2021-11-01" , "2021-12-01"] ;
  const DateF  =  dates;

/*   const FilterDate = (event) =>{
    const el1 = document.getElementById('startdate')
    const el2 = document.getElementById('enddate')

    const indexF1 = dates.indexOf( el1.value )
    const indexF2 = dates.indexOf( el2.value )


    const DateF = dates.slice(indexF1 , indexF2 + 1  )    

    console.log(DateF)

    } */

  return (
    <React.Fragment>
<div className='container-fluid mt-3 mb-3'>
           <h2 id="smya">Line Chart</h2>          
          <Chart type='line'
          
             width={900}
             height={300}
          series={
            [
                {
                    name:"T-shirt",
                    data: data
                  },
            ]
          }
          options =  { {
                title : {

                    text : "graphe",
                    align: 'center'
                },

                xaxis: {
                  categories: DateF
                },

                zoom: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'straight'
                  },
          }}
          > 
          </Chart>

        </div>

        {/* <div className="date">
              <span>
            From :
            <input onChange={ FilterDate } type="date" id="startdate" value="2021-04-01"/>
              </span>
              <span>
            To : 
            <input onChange={ FilterDate } type="date" id="enddate" value="2021-11-01"/>
              </span>
            </div> */}

    </React.Fragment>
    )
}
