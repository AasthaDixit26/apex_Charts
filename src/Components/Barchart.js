import React from 'react';
import Chart from 'react-apexcharts';
const BarChart=()=>{
    return(
        <React.Fragment>
            <div className='container-fluid mb-5 containerht'>
                <h3 className='text-centre mt-3 mb-3'></h3>
                {/* <div id="responsive-chart"></div> */}
            <Chart
            type='bar'
            width={1080}
            height={500}
            series={[
                {name:'social media subscriber',
                data:[45678,23324,23423,23412,21311,23145,32543]
            }

            ]}
           
            options={{
                colors:["#A020F0"],
                theme:{mode:'dark'},
                plotOptions:{
                    bar:{
                        horizontal:true
                    }
                },
                responsive: [
                    {
                      breakpoint: 666,
                      
                      options: {
                        chart: {
                            width: 360,
                            height: 784
                        },
                        plotOptions: {
                          bar: {
                            horizontal: false
                          }
                        },
                        legend: {
                          position: "bottom"
                        }
                      }
                    }
                  ]
            }}
            
            
            
                
            >

            </Chart>
            </div>
        </React.Fragment>
       
    );
}
export default BarChart;