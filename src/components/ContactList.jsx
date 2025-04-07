import { deleteContacts } from "../redux/contactsSlice";
import Contact from "./Contact";
import css from "./ContactsStyle/ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function ContactList() {



  const contactsList = useSelector(state => {
    const filter = state.filters.name.toLowerCase();
    return state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  });




// const contactsList = useSelector(state => state.contacts.items)

const dispatch = useDispatch()

const handleDelite = (id) => {
  dispatch(deleteContacts(id))
}


 
  return (
    <ul className={css.listItem}>
      {contactsList.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={handleDelite} />
        </li>
      ))}
    </ul>
  );
}
