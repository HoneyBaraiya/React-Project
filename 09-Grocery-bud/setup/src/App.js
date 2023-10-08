import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage=()=>{
  let list=localStorage.getItem('list');
  if(list){
    return(list=JSON.parse(localStorage.getItem('list')));
  }
  else{
    return [];
  }
}

function App() {
  const [value,setValue]=useState('')
  const [groceryList,setGroceryList]=useState(getLocalStorage());
  const [editID,seteditID]=useState('');
  const [isEditing,setIsEditing]=useState(false)
  const [alert,setAlter]=useState({show:false,msg:'',type:''});

  const showAlert=(show=false,msg='',type='')=>{
    setAlter({show,msg,type});
  }

  const AddToList=(e)=>{
    e.preventDefault();
    if(!value)
      showAlert(true,'Please add the item!','danger');
    else if(value && isEditing){
      setGroceryList(groceryList.map((listItem)=>{
          if(listItem.id===editID)
            return{...listItem,title:value};
          return listItem;
      }))
      showAlert(true,'updated Successfully!','success');
      seteditID(null);
    }
    else{
      let id=new Date().getTime().toString();
      setGroceryList([...groceryList,{id:id,title:value}]);
      showAlert(true,'New Item Added Successfully!','success');
      setValue('');
    }
    setValue('');
    setIsEditing(false);
  }

  const updateRecord=(id)=>{
    let record=groceryList.find((data)=>data.id===id);
    setIsEditing(true);
    setValue(record.title);
    seteditID(id);
    
  }
  const deleteRecord=(id)=>{
    setGroceryList(groceryList.filter((item)=>item.id!==id));
    showAlert(true,'One Item deleted!','danger');
  }

  const clearAllList=()=>{
    showAlert(true,'All Item is deleted!','danger');
    setGroceryList([]);
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(groceryList))  
  },[groceryList])

  return (
    <section className='section-center'>
    <form className='grocery-form'  onSubmit={AddToList}>
      {alert.show && <Alert {...alert} removeAlter={showAlert} groceryList={groceryList}/>}
      <h3>Grocery Bud</h3>
      <div className='form-control' >
        
            <input type='text' name="txtInput" id="txtInput" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button type='submit' id="btnSubmit" className='submit-btn'>{isEditing?'Edit':'Submit'}</button> 
             
     
      </div>
    </form>
      {
        groceryList.length>0 &&(
          <div className='grocery-container'>
            <List items={groceryList} updateRecord={updateRecord} deleteRecord={deleteRecord}/>
            <button className='clear-btn' onClick={clearAllList}>clear all</button> 
          </div>
        )
      }
        
     
    </section>
    
  )
}

export default App
