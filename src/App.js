import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Cards from "./components/Cards";
import Category from "./components/Category";
import Header from "./components/Header";
import NavScrollExample from "./components/Nav";
import { items } from "./components/data";

function App() {
  const [itemsData, setItemsData] = useState(items)

  const allCategory = ["الكل", ...new Set(items.map((item)=> item.category))]
 
  const filteredByCategory = (cat) =>{
    if(cat === 'الكل'){
      setItemsData(items)
    }else{
      const newArr = items.filter((item)=> item.category === cat)
        setItemsData(newArr) 
    }
      
  }
   const filterBySearch =(word) =>{
    if(word !== ''){
      const newArr = items.filter((item)=> item.title === word)
      setItemsData(newArr) 
    }
   
   } 

  return (
    <div className="font">
    <NavScrollExample  filterBySearch ={filterBySearch}/>
    <Container >
      <Header/>
      <Category filteredByCategory ={filteredByCategory} allCategory = {allCategory}/>
      <Cards itemsData ={itemsData}/>
    </Container>
    </div>
  );
}

export default App;
