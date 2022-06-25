import React ,{ useEffect, useState } from "react";
import { createPopper } from "@popperjs/core";

const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

const NotificationDropdown = ({setFood}) => {

  const [books, setbooks]=useState(getDatafromLS());
  const [nombre, setNombre]=useState(setFood.nombre);
  const [author, setAuthor]=useState('');
  const [id, setID]=useState(setFood.id);

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      nombre,
      author,
      id
    }
    setbooks([...books,book]);
    setAuthor('');
    setID('');
  }

  const deleteBook=(id)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.id !== id
    })
    setbooks(filteredBooks);
  }

    // saving data to local storage
    useEffect(()=>{
      localStorage.setItem('books',JSON.stringify(books));
    },[books])


  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 uppercase last:mr-0 mr-1 hover:bg-emerald-600 shadow-lg">
        <i className="fas fa-plus"></i>
</span>
        
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 hover:shadow-lg"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={handleAddBookSubmit}
        >
          Desayuno
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={(e) => e.preventDefault()}
        >
          Almuerzo
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={(e) => e.preventDefault()}
        >
          Comida
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={(e) => e.preventDefault()}
        >
          Merienda
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:shadow-lg"
          }
          onClick={(e) => e.preventDefault()}
        >
          Cena
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
