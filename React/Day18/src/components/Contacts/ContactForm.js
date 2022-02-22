import React,{useState}from 'react'
import './ContactForm.css'
import ContactComp from './ContactComp.js'
import ModalComp from './ModalComp'

const ContactForm = () => {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [ModalName, setModalName] = useState('')
    const [ModalEmail, setModalEmail] = useState('')
    const [ShowModal, setShowModal] = useState(false)
    const [Index, setIndex] = useState(0)
    const [Contacts, setContacts] = useState([
        {name:'Likhith',email:'lik@gmail'},
        {name:'Athish',email:'ath@gmail'},
        {name:'Vedavyas',email:'ved@gmail'},
    ])
    const handleClick=(e)=>{
        e.preventDefault()
        const temp={
            name:Name,
            email:Email
        }
        setContacts([...Contacts,temp])
        setName("")
        setEmail("")
    }

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handleDelete=(e)=>{
        const tempContacts=Contacts.filter(item=>item.email!=e)
        setContacts(tempContacts)
    }

    const handleEdit=(e)=>{
        setShowModal(true)
        setIndex(e)
    }
    const closeModal=()=>{
        setShowModal(false)
    }
    const handleModalName=(e)=>{
        setModalName(e.target.value)
    }
    const handleModalEmail=(e)=>{
        setModalEmail(e.target.value)
    }
    const handleModalEdit=(e)=>{
        const newContacts=[...Contacts]
        const index=newContacts.findIndex(item=>item.email==e)
        newContacts[index]={name:ModalName, email:ModalEmail}
        setContacts(newContacts)
        setShowModal(false)
        setModalName('')
        setModalEmail('')
    }


  return (
      <div>
    <div className='container'>
        <form action="">
        <div className="row">
     <div className="col">
      <input type="text" 
         className="form-control"
         placeholder="Full name"
         aria-label="First name" 
         value={Name}
         onChange={handleNameChange} />
    </div>
    <div className="col">
     <input type="email" 
     className="form-control" 
     placeholder="Email" 
     aria-label="Last name"
     value={Email}
     onChange={handleEmailChange}  />
    </div>
    </div> <br />

    <button type="button" className="btn btn-dark mt-3" onClick={handleClick}>Add Contact</button>
 </form>
        
        </div>
       <ContactComp contact={Contacts} handleDelete={handleDelete} handleEdit={handleEdit}  />
       <ModalComp ShowModal={ShowModal} 
       closeModal={closeModal} 
       handleModalName={handleModalName} 
       handleModalEmail={handleModalEmail} 
       Index={Index}
       handleModalEdit={handleModalEdit}
       />
        </div>
  )
}

export default ContactForm

