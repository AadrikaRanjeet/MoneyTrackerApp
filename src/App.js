import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
  const [name ,setName]=useState('');
  const [datetime ,setDatetime]=useState('');
  const [description ,setDescription]=useState('');

  function addnewtransaction(ev)
  {
    ev.preventDefault();
    const url=process.env.REACT_APP_API_URL;
    console.log(url);
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addnewtransaction}>
        <div className="basic">
        <input type="text" 
            value={name}
            onChange={ev=>setName(ev.target.value)}
        placeholder={'+200 new samsung tv'}/>

        <input 
        value={datetime}
        onChange={ev=>setDatetime(ev.target.value)}
        type="datetime-local" />
        </div>
        <div className="description">
        <input
        value={description}
        onChange={ev=>setDescription(ev.target.value)}
        type="text" placeholder={'description'}/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
         <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">$500</div>
            <div className="datetime">2024-4-17 10:12</div>
          </div>
        </div>
         
        <div className="transaction">
         <div className="left">
            <div className="name">Iphone</div>
            <div className="description">it was time for new phone</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2024-4-17 10:12</div>
          </div>
        </div>

        <div className="transaction">
         <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">it was time to switch job</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2024-4-17 10:12</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
