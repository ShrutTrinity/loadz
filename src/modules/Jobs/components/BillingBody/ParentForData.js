import React, { useState } from 'react'
import AddPopup from './AddPopup'
import DataTable from './DataTable'


const ParentForData = () => {

    const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div>
      <AddPopup onSubmit={handleFormSubmit} />
      <DataTable  formData={formData} />
    </div>
  )
}

export default ParentForData
