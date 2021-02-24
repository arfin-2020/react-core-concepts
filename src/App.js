import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
 const products =[
   {name:"photoshop", price:"$1200"},
   {name:"illustrator", price:"$600"},
   {name:"PDF Reader", price:"$6.99"},
   {name:"TFT Reader", price:"$6.99"}
  ]
  const nayoks = ["Arif","Rajjak","Riyaj",'Sakib','Rajjak'];
  // const productsNames = products.map(product=>product.name)
  // console.log(productsNames);
  // const nayoksName = nayoks.map(nayok=>nayok)
  // console.log(nayoksName);

  return (
    <div className="App">
      <header className="App-header">
       <h1>I am a hero Man. Now I am learning React framework It's very easy to learn. Every body should learn it.</h1>
       {/* <Product name = {products[0].name} price = {products[0].price}></Product>
       <Product name = {products[1].name} price = {products[1].price}></Product>
       <Product name = {products[2].name} price = {products[2].price}></Product> */}
       {/* dynamic babe list a  name add kora */}
       <Users></Users>
       <Counter></Counter>
       <ul>
       {
         nayoks.map(nayok=><li>{nayok}</li>)
       }
       </ul>
       <ul>
         {
          products.map(product=><li>{product.name}</li>)
         }
       </ul>
       <ul>
         {
           products.map(pd=><Product product = {pd}></Product>)
         }
       </ul>
       <Product product = {products[0]} ></Product>
       <Product product = {products[1]}></Product>
       <Product product = {products[2]}></Product>
       <Person name = "Arfin Chowdhury Arif" fname = "Undefine"></Person>
       <Person name = "Hero Alam" fname = "MON MON"></Person>
       <Person name = "Alamgir" fname = "Sabana"></Person>
      </header>
    </div>
  );
}

//How to data load or fetch?
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]) //akane empty array deyar karon hocee useEfect ta jate 1 bar kaj kore bar bar jate kaj no kore
  
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        console.log(users)
      }
      {
        users.map(user=><li>{user.name}</li>)
      }
      {
        users.map(user=><li>{user.phone}</li>) 
      }
      {
        users.map(user=><li>{user.email}</li>) 
      }
    </div>
  )
}
// same way Again try
// function Users(){
//   const [users,setUsers] = useState([]);
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(data => setUsers(data))
//   })
//   return (
//     <div>
//       <h3> Count: {users.length}</h3>
//       {
//         users.map(user=><li>{user.name}</li>)
//       }
//     </div>
//   )
// }
//using state here 
function Counter(){
  const [count,setCount] = useState(0);
  const handleincrease = ()=>{
  const newCount = count + 1;
  setCount(newCount); 
  }
  const handledecrease = () =>{

  if(count > 0){
    const newCount = count - 1;
    setCount(newCount);
  }
  }
  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onMouseOver = {handleincrease}>Increase</button>
      <button onMouseOver = {handledecrease}>Decrease</button>
    </div>
  )
}

// ata hocce single object pass korte hoi
function Person (props) {
  const personstyle = {color:"white",backgroudColor:"black",padding:"10px",border:"2px solid yellow",marginBottom:"30px"}
  return (
  <div style = {personstyle}>
    <h1> Nayok Name: {props.name} Nayika Name: {props.fname}</h1>
    <h2> Nayok Name: {props.name} Nayika Name: {props.fname}</h2>
    <h3> Nayok Name: {props.name} Nayika Name: {props.fname}</h3>
  </div>)
}
//ata hocce ki babe onek gulo different object pass korte hoi
function Product (props1){
  const productStyle = {
    border: "1px solid grey",
    borderRadius:"5px",
    backgroundColor: "lightgray",
    height:"200px",
    width:"200px",
    float:"left",
    marginBottom:"60px",
    padding:"10px",
    color:"black"
  }
  const {name,price} = props1.product;  // using here destructure 
  // console.log(props1);
  return (
    <div style = {productStyle}>
        <h5>Name: {name}</h5>
        <h6>price: {price}</h6>
        <button>Buy Now</button>
    </div>
  )
}
export default App;
