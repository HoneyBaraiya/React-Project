import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

 const allCategories=['All',...new Set(items.map((item)=>item.category))] ;


function App() {
  const [menu,setMenu]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  function filterCategory(category){
    if(category==='All')
    {
      setMenu(items);
    }
    else{
      const newCatergories=items.filter((item)=>item.category===category);
      setMenu(newCatergories);
    }
  }
  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories allCategories={categories} filterCategory={filterCategory}/>
        <Menu items={menu}/>
      </section>
    </main>
  );
}

export default App;
