import React, { useState } from "react";  
import { Slider } from "../../../beolayer/components/base/slider/Slider";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx";
import Table from "../../../beolayer/components/base/Table/Table";
import ClientForm from "./form/ClientForm.jsx";

const ClientsMain = () => {
    const [showSlider,setShowSlider] = useState(false); 
      const [selectedRows, setSelectedRows] = useState([]);
      const [resetKey, setResetKey] = useState(0);
          const [searchTerm, setSearchTerm] = useState(""); 
      const headers = [
        { key: "name", name: "Name" },
        { key: "email", name: "Email" },
        { key: "role", name: "Role" },
      ];
    
      const data = [
        { id: "1", name: "Alice", email: "alice@example.com", role: "Admin" },
        { id: "2", name: "Bob", email: "bob@example.com", role: "User" },
        { id: "3", name: "Charlie", email: "charlie@example.com", role: "Moderator" },
        { id: "4", name: "David", email: "david@example.com", role: "Admin" },
        { id: "5", name: "Eve", email: "eve@example.com", role: "User" },
        { id: "6", name: "Frank", email: "frank@example.com", role: "Moderator" },
        { id: "7", name: "Grace", email: "grace@example.com", role: "Admin" },
        { id: "8", name: "Henry", email: "henry@example.com", role: "User" },
        { id: "9", name: "Ivy", email: "ivy@example.com", role: "Moderator" },
        { id: "10", name: "Jack", email: "jack@example.com", role: "Admin" },
        { id: "11", name: "Kate", email: "kate@example.com", role: "User" },
        { id: "12", name: "Liam", email: "liam@example.com", role: "Moderator" },
        { id: "13", name: "Mia", email: "mia@example.com", role: "Admin" },
        { id: "14", name: "Noah", email: "noah@example.com", role: "User" },
        { id: "15", name: "Olivia", email: "olivia@example.com", role: "Moderator" },
        { id: "16", name: "Parker", email: "parker@example.com", role: "Admin" },
        { id: "17", name: "Quinn", email: "quinn@example.com", role: "User" },
        { id: "18", name: "Riley", email: "riley@example.com", role: "Moderator" },
        { id: "19", name: "Sophia", email: "sophia@example.com", role: "Admin" },
        { id: "20", name: "Theo", email: "theo@example.com", role: "User" },
      ];
    
      const handleRowClick = (row) => {
        console.log("Row clicked:", row);   
      };
    
      const handleSelectionChange = (rows) => {
        console.log("Selected rows:", rows);
        setSelectedRows(rows);
      };
    
      const handleScrollBottom = () => {
        console.log("Scrolled to bottom – Load more data if needed.");
        // You can load more data here.
      };
    
      const handleResetSelection = () => {
        setResetKey((prev) => prev + 1);
      };

  return (
    <>
      {/* Slider for Adding Candidate */}
      <Slider size="large" headline="Add Candidates" showSlider={showSlider} setShowSlider={setShowSlider}>
        <ClientForm setShowSlider={setShowSlider} />
      </Slider>

      {/* Header Section */}
<div className="p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
  <div className="text-2xl font-semibold">Clients</div>

  <div className="flex flex-col sm:flex-row gap-4 items-center">
    
    {/* Search Input */}
    <div className="flex items-center border rounded-lg px-4 py-2 bg-white shadow-sm w-full max-w-[300px] h-[40px]">
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
          data={data}
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
export default ClientsMain;
