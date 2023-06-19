import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bar } from 'react-chartjs-2';
import "chart.js/auto";


function App() {
  const [data, setdata] = useState([{'a': 8} , {'b':5} , {'c': 3}]) ; 


  const[show , setshow] = useState(false) ; 

  const data2 = {
    labels: data.map((item) => Object.keys(item)[0]),
    datasets: [
      {
        label: 'Data',
        data: data.map((item) => Object.values(item)[0]),
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };

  const increament = (key)=>{
    const newData = data.map((item) => {
      const itemKey = Object.keys(item)[0];
      if (itemKey === key) {
        return { [itemKey]: item[itemKey] + 1 };
      }
      return item;
    });

    console.log("increment " , newData)

    setdata(newData);



  }

  const decrement = (key)=>{
    const newData = data.map((item) => {
      const itemKey = Object.keys(item)[0];
      if (itemKey === key && item[itemKey] > 0) {
        return { [itemKey]: item[itemKey] - 1 };
      }
      return item;
    });
    console.log("decrement" , newData)

    setdata(newData);



  }





  return (
    <div class = " d-flex flex-column border justify-content-center" style={{height : '100vh'}}>
      <div class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-5">
        <div class="container">
          <h1 class="navbar-brand">
            Azista
          </h1>

          


       
         
        </div>
      </div>
      <div class = "d-flex  flex-column  justify-content-center" style={{height:'50px'}}>
      <div class="d-flex  justify-content-center mt-5">
        <div >
          {
            data.map((item , i) =>(
              <>
                 <div class="d-flex justify-content-between mt-5" style={{width : '300px'  , height : '50px'}}>
             <div class = "border" style={{width:'50px'}}>
                <h1 class = "ml-auto mr-auto">{Object.keys(item)[0]}</h1>
             </div>
             <div class = "bg-primary"style={{width:'50px'}}>
             <h1 class = "ml-auto mr-auto text-white">{Object.values(item)[0]}</h1>
             </div>
             <div class="d-flex justify-content-between" style={{width : '100px'  , height : '50px'}}>
             <button class="btn btn-dark mr-8" onClick={()=>{increament(Object.keys(item)[0])}}>
                  +
                </button>
                
                <button class="btn btn-dark ml-8" onClick={()=>{decrement(Object.keys(item)[0])}}>
                  -
                </button>
             </div>
          </div>
              </>
            ))
          }
       
          <h4 class ="mt-5 text-center"></h4>
        </div>
        
      </div>
        <button class="btn btn-primary m-auto"  style = {{height: '50px' , width : '300px'}} onClick={()=>{setshow(!show)}}><h8>show chart</h8></button>
        <div class = "mt-5"></div>
       {show ? (

      <div class = "m-auto" style={{height : 600 , width : 600 }}>
        <Bar data={data2} />
        </div>
      ) : null } 

      </div>
    </div>

  )
}

export default App
