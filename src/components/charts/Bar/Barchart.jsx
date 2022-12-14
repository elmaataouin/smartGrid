import React from "react";
import Chart from "react-apexcharts";

export default function Barchart() {
  return (


<React.Fragment>
      <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>

        <Chart
          type="bar"
          width={900}
          height={300}
          series={[
            {
              name: "x",
              data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
            },
          ]}
          options={{
            title: {
              text: "BarChar ",
              style: { fontSize: 20 },
            },

            subtitle: {
              text: "This is BarChart Graph",
              style: { fontSize: 18 },
            },

            colors: ["#FFBE42"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "a",
                "b",
                "c",
                "d",
                "e",
                "e",
                "f",
              ],
              title: {
                text: "xr",
                style: { color: "#f90000", fontSize: 20 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
              title: {
                text: "Y",
                style: { color: "##FFBE42", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>


    )

  
}


{

    /*
    

function Barchart() {
  return (
    
  );
}

export default Barchart;

    */
}