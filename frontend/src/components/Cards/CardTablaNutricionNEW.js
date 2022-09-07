import React, { useState, useMemo, useEffect } from 'react';
import DataTable from "react-data-table-component"
import UserService from 'services/user.service';
import ModalControlComida from "components/Modals/ModalControlComida";


const columns = [
  	{
  		name: 'PORCIÓN(100G)',
      	selector : 'nombre',
  		sortable: true,
		grow: 3,
		style: {
					color: '#202124',
					fontSize: '14px',
					fontWeight: 500,
				},
  	},
  	{
  		name: 'Energía(KJ)',
      selector : row => Math.trunc(row.energiaT),
  		sortable: true,
  	},
    {
  		name: 'Calorías(Kcal)',
      selector : row => Math.trunc(row.energiaT*0.238846),
  		sortable: true,
  	},
    {
  		name: 'Grasa(G)',
      selector : 'grasaT',
	    sortable: true,
  	},
    {
  		name: 'Proteína(G)',
      selector : 'proteinaT',
	    sortable: true,
  	},
    {
      cell: row => <ModalControlComida setFood={row}/>,
      allowOverflow: true,
      button: true,
      width: '56px',
    },
  ];

  const customStyles = {
  	headRow: {
  		style: {
  			border: 'none',
  		},
    	},
    	headCells: {
    		style: {
    			color: '#202124',
    			fontSize: '14px',
    		},
    	},
    	rows: {
    		highlightOnHoverStyle: {
    			backgroundColor: 'rgb(230, 244, 244)',
    			borderBottomColor: '#FFFFFF',
    			borderRadius: '25px',
    			outline: '1px solid #FFFFFF',
    		},
    	},
    	pagination: {
    		style: {
    			border: 'none',
    		},
    	},
    };

  const FilterComponent = ({ filterText, onFilter}) => (
    	<>
<div class="relative flex w-full flex-wrap items-stretch mb-4">
<input
            id="search"
            type="text"
            onChange={onFilter}
            placeholder="Buscar comida"
            value={filterText}
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>   		
              <span
                  class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                  <i class="fas fa-search"></i>
              </span>
            </div>

          
		</>

    );


export default function CardTablaNutricionNEW({ color, data }) {

	
  
    const [filterText, setFilterText] = useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
	const [comidaBD, setComidaBD] = useState([]);

	useEffect(()=>{UserService.getAllFood().then(data => {
		setComidaBD(data)
	}).catch(err => console.log(err));},[])

	const filteredItems = comidaBD.filter(
		item => item.nombre && item.nombre.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

  return (
		<DataTable
			title="Comida"
			columns={columns}
			data={filteredItems}
			pagination
			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
			subHeader
      customStyles={customStyles}
			subHeaderComponent={subHeaderComponentMemo}
			persistTableHead
		/>
		
	);
}
