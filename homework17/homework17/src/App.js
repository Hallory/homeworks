import { useMemo, useState } from 'react';
import './App.css';
import MyInput from './components/UI/MyInput/MyInput';
import User from './components/Users/User/User';
import module from './components/UI/MyInput/MyInput.module.css'
function App() {
  const [searchValue, setSearchValue] = useState('')
  const [showMale, setShowMale] = useState(true);
  const [showFemale, setShowFemale] = useState(true);
  const [showUnknown, setShowUnknown] = useState(true);
  
  const [contacts, setContacts] = useState([{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
    }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
    }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
    }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
    }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
    }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956419521",
    gender: "male"
    }])
  
    const searchedContacts = useMemo(()=>{
       return contacts.filter(contact => 
        contact.firstName.toLowerCase().includes(searchValue.toLowerCase())
       ||contact.lastName.toLowerCase().includes(searchValue.toLowerCase())
       ||contact.phone.includes(searchValue))
    },[searchValue, contacts])

    
    const handleSearchChange =(gender)=>{
      if (gender==='male') {
          setShowMale(!showMale)
      }else if(gender === 'female'){
        setShowFemale(!showFemale)
      }else{
        setShowUnknown(!showUnknown)

      }
    }

    const filteredContactsByGender = searchedContacts.filter((contact) => {
      if (contact.gender === "male") {
        return showMale;
      } else if (contact.gender === "female") {
        return showFemale;
      } else {
        return showUnknown;
      }
    });
   
  return (
    <div className="App">
      <MyInput  
      onChange={(e)=>setSearchValue(e.target.value)} 
      type='text'  placeholder='Search...'
      className={module.myInput}/>
      <div>
        <span><MyInput type="checkbox"
            checked={showMale}
            onChange = {()=>handleSearchChange('male')}
            ></MyInput>
            M
        </span>
        <span><MyInput type="checkbox"
            checked={showFemale}
            onChange = {()=>handleSearchChange('female')}
            ></MyInput>
            F
        </span>
        <span><MyInput type="checkbox"
            checked={showUnknown}
            onChange = {()=>handleSearchChange()}
            ></MyInput>
            U
        </span>
            
      </div>
      {
      filteredContactsByGender.map((contact)=>
        <User contact={contact} key={contact.phone}/>
      )}
    </div>
  );
}

export default App;
 