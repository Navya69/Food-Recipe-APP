import React,{useEffect, useState} from 'react';
import Products from './Products';
import OneSignal from 'react-onesignal';

const App = () => {
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);
  const YOUR_APP_ID ="57b61f27";
  const YOUR_APP_KEY ="abe20662438de76e408e64547e5c5c0b";
  useEffect(()=>{
    OneSignal.init({appId:'b50ed0b6-0d71-4703-a21f-82e4d3a16221'})
      })
  const submithandler=(e)=>{
    e.preventDefault();
    console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722`).then(
    response=>response.json()
    ).then(
      data=>setData(data.hits)
    )
    
  }
  return (
    <div>
      <center>
      <h4>Food Recipie App</h4> <br/>
      <form onSubmit={submithandler}>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} /> <br/> <br/>
        <input type="submit" value="Search" className='btn btn-primary'/> 
      </form> <br/>
      {data.length >=1 ?<Products data={data}/>:null}
      
      
      </center>
    </div>
  );
};

export default App;
