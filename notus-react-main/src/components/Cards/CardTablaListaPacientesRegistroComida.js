import React from "react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import AdminService from "services/admin.service";
import AuthService from "services/auth.service";
import ModalRegistrosComida from "components/Modals/ModalRegistrosComida"


const columns = [

  
  {
    name: 'Nombre de Usuario',
      selector : row => row.username,
      sortable: true,
      grow: 1,
      style: {
            color: '#202124',
            fontSize: '14px',
            fontWeight: 500,
          },
  },
  {
    name: 'Nombre',
    selector : row => row.first_name,
    sortable: true,
  },
  {
    name: 'Apellido',
    selector : row => row.second_name,
    sortable: true,
  },
  {
    name: 'Email',
    selector : row => row.email,
    sortable: true,
  },
  {
    name: 'ID',
    selector : row => row._id,
    sortable: true,
  },
  {
    cell: row => <ModalRegistrosComida setMod={row} />,
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
          placeholder="Buscar paciente"
          value={filterText}
          class="px-3 py-3 placeholder-blueGray-400 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>   		
            <span
                class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <i class="fas fa-search"></i>
            </span>
          </div>
  </>

  );

export default function Tables() {

  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const [listaMedicos,setListaMedicos] = useState([]);
  const [listaPacientesMod,setListaPacientesMod] = useState([]);
 

  useEffect(()=>{AdminService.getPacientesVinculadosAlModerador(AuthService.getCurrentUser().id).then(data => {
    setListaPacientesMod(data)
}).catch(err => console.log(err));},[])

	const filteredItems =  listaPacientesMod.filter(
		item => item.username && item.username.toLowerCase().includes(filterText.toLowerCase()),
	);

  const ExpandedComponent = ({ data }) => (
  
    <p></p>
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
    <>
    <div>
      <div className="flex flex-wrap mt-8 ">
            
          
        <DataTable
            title="Lista Pacientes"
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            responsive
            highlightOnHover
            pointerOnHover
            expandableRowsComponent={ExpandedComponent}
            customStyles={customStyles}
            expandableCloseAllOnExpand
            subHeaderComponent={subHeaderComponentMemo}
            persistTableHead
		/>         
          
          </div>
        </div>
    </>
  );
}