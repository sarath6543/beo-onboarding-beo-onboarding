import React, { useState } from "react";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx";
import { Slider } from "../../../beolayer/components/base/slider/Slider.jsx";
import Table from "../../../beolayer/components/base/Table/Table";
import CandidateForm from "./form/CandidateForm.jsx";
import { useNavigate } from "react-router-dom";
import Chip from '@mui/material/Chip';


const CandidatesMain = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); 

  const getOfferStatus = (status) => {
    switch (status) {
      case 'error':
        return 'Rejected';
      case 'success':
        return 'Accepted';
      default:
        return 'Pending'
    }
  }

  const chipColor = (status) => {
  switch (status) {
    case 'error':
      return '#E60000';
    case 'success':
      return '#59EC9E';
    case 'pending':
    case 'progress':
      return '#FFB86A';
    default:
      return '';
  }
}

  const getStatus = (status) => {
  switch (status) {
    case 'error':
      return 'Rejected';
    case 'success':
      return 'Success';
    case 'progress':
      return 'In Progress';
    default:
      return 'Yet to Start';
  }
};

  const navigate = useNavigate();

  const headers = [
    { id: "name", name: "Name" },
    { id: "status", name: "Status",
      render: (value) => (
        <Chip label={getStatus(value)}  style={{color: value === "error" && "white" ,backgroundColor:chipColor(value)}}  sx={{
  width: 100,              
  height: 28,              
  borderRadius: '5px',    
  fontSize: '0.75rem',   
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}}/>
      ), },
    { id: "email", name: "Email" },
    { id: "offerstatus", name: "Offer Letter Status",
      render: (value) => (
        <Chip label={getOfferStatus(value)} style={{color:chipColor(value), borderColor:chipColor(value)}} variant="outlined" sx={{
  width: 100,              
  height: 28,              
  borderRadius: '5px',     
  fontSize: '0.75rem',     
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}}/>
      ), },
    { id: "role", name: "Role" },
  ];

  const data = [
    { id: "1", name: "Alice", email: "alice@example.com", offerstatus: "error", role: "Admin", status: "success" },
    { id: "2", name: "Bob", email: "bob@example.com", offerstatus: "success", role: "User", status: "error" },
    { id: "3", name: "Charlie", email: "charlie@example.com", offerstatus: "pending", role: "Moderator", status: "yet to start" },
    { id: "4", name: "David", email: "david@example.com", offerstatus: "error", role: "Admin", status: "progress" },
    { id: "5", name: "Eve", email: "eve@example.com", offerstatus: "success", role: "User", status: "error" },
    { id: "6", name: "Frank", email: "frank@example.com", offerstatus: "error", role: "Moderator", status: "success" },
    { id: "7", name: "Grace", email: "grace@example.com", offerstatus: "success", role: "Admin", status: "yet to start" },
    { id: "8", name: "Henry", email: "henry@example.com", offerstatus: "pending", role: "User", status: "error" },
    { id: "9", name: "Ivy", email: "ivy@example.com", offerstatus: "success", role: "Moderator", status: "success" },
    { id: "10", name: "Jack", email: "jack@example.com", offerstatus: "error", role: "Admin", status: "progress" },
    { id: "11", name: "Kate", email: "kate@example.com", offerstatus: "success", role: "User", status: "error" },
    { id: "12", name: "Liam", email: "liam@example.com", offerstatus: "error", role: "Moderator", status: "success" },
    { id: "13", name: "Mia", email: "mia@example.com", offerstatus: "success", role: "Admin", status: "success" },
    { id: "14", name: "Noah", email: "noah@example.com", offerstatus: "success", role: "User", status: "progress" },
    { id: "15", name: "Olivia", email: "olivia@example.com", offerstatus: "pending", role: "Moderator", status: "error" },
    { id: "16", name: "Parker", email: "parker@example.com", offerstatus: "error", role: "Admin", status: "yet to start" },
    { id: "17", name: "Quinn", email: "quinn@example.com", offerstatus: "success", role: "User", status: "yet to start" },
    { id: "18", name: "Riley", email: "riley@example.com", offerstatus: "pending", role: "Moderator", status: "error" },
    { id: "19", name: "Sophia", email: "sophia@example.com", offerstatus: "error", role: "Admin", status: "success" },
    { id: "20", name: "Theo", email: "theo@example.com", offerstatus: "success", role: "User", status: "progress" },
  ];

  const handleRowClick = (row) => {
    navigate(`/admin-home/admin-candidates/${row.id}`);
    console.log("Row clicked:", row);
  };

  const handleSelectionChange = (rows) => {
    console.log("Selected rows:", rows);
    setSelectedRows(rows);
  };

  const handleScrollBottom = () => {
    console.log("Scrolled to bottom – Load more data if needed.");
    // Add lazy loading logic here if needed
  };

  const handleResetSelection = () => {
    setResetKey((prev) => prev + 1);
  };
   const data1 = data.filter((row) => {
    const search = searchTerm.toLowerCase();
    return (
      row.name.toLowerCase().includes(search) ||
      row.email.toLowerCase().includes(search) ||
      row.role.toLowerCase().includes(search) ||
      row.status.toLowerCase().includes(search) ||
      row.offerstatus.toLowerCase().includes(search)
    );
  });

  return (
    <>
    {/* Slider for Adding Candidate */}
    <Slider size="large" headline="Add Candidates" showSlider={showSlider} setShowSlider={setShowSlider}>
      <CandidateForm setShowSlider={setShowSlider} />
    </Slider>

    {/* Header Section */}
    <div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
      <div className="text-2xl font-semibold ms-12">Candidates</div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        
        {/* Search Input */}
        <div className="flex items-center border rounded-lg px-1 py-2 bg-white shadow-sm w-full max-w-[300px] h-[40px]">
          <FontIcon iconName={"search"} />
          <input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-2 w-full outline-none text-sm bg-transparent"
            type="text"
          />
        </div>

        {/* Add Button */}
        <button
          onClick={() => setShowSlider(true)}
          className="bg-[#3F3F3F] text-white rounded-lg text-sm px-4 py-2 h-[40px] flex items-center gap-2 shadow-sm hover:bg-[#2f2f2f] transition"
        >
          <span className="text-lg leading-none">+</span>
          <span className="whitespace-nowrap">Add Candidates</span>
        </button>
        
      </div>
    </div>


      {/* Table Section */}
      <div className="px-6 pb-6">
        <Table
          headers={headers}
          data={data1}
          onRowClick={handleRowClick}
          onSelectionChange={handleSelectionChange}
          singleSelect={false}
          enableSelectAll={true}
          onScrollBottom={handleScrollBottom}
          resetKey={resetKey}
        />
      </div>
    </>
  );
};

export default CandidatesMain;
