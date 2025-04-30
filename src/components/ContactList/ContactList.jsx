import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"
import { useSelector } from 'react-redux';

const filterArr = (arr, fil)=>{

  if (!arr) {return []}
  if (!fil) {return arr}
 
  return arr.filter(ar=>ar.name.toLowerCase().includes(fil.toLowerCase()))
}


 function ContactList () {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);
 
  const filterContacts = filterArr(contacts, filter)

  
  

    return (<>
    <ul className={css.list}>
        
        {filterContacts.map(contact => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>   ))}   
     
    </ul>    
    
    </>

  );
}

export default ContactList;


/*


    */