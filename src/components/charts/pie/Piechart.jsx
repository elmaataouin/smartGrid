// import React ,{ useState, useEffect} from "react";
import React from "react";

import  Chart  from "react-apexcharts";

export default function Piechart() {
/*
    const [stdudentSubject, setStudentsubject]= useState([]);
    const [studentMarks, setStudentMarks]= useState([]);
 
    useEffect( ()=>{
        const sSubject=[];
        const sMarks=[];
        const getStudentdata= async()=>{
        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
        const resData= await reqData.json();       
        for(let i=0; i< resData.length; i++)
        {
         sSubject.push(resData[i].subject);
         sMarks.push(parseInt(resData[i].marks));
        }
        setStudentsubject(sSubject);
        setStudentMarks(sMarks);
         //console.log(resData); 
        }
 
     getStudentdata();
 
    },[]);
 
   */
    
  return (
        <React.Fragment>
            <div className="container-fluid mb-3">
                <h3 className="mt-3">Welcome to Piechart </h3>
                <Chart 
                type="pie"
                width={900}
          height={300}

                series= {[44, 55, 13, 43, 22]}
            
                options={{
                        title:{ text:"Student PieChart"} , 
                        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                        responsive: [{
                            breakpoint: 480,
                            options: {
                              chart: {
                                width: 200
                              },
                              legend: {
                                position: 'bottom'
                              }
                            }
                          }]
                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
    )  
}
