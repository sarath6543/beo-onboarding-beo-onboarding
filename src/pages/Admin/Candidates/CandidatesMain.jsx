import React, { useState } from "react";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx";
import { Slider } from "../../../beolayer/components/base/slider/Slider.jsx";
import Table from "../../../beolayer/components/base/Table/Table";
import CandidateForm from "./form/CandidateForm.jsx";
import { useNavigate } from "react-router-dom";


const CandidatesMain = () => {
   const navigate = useNavigate();
    const [showSlider,setShowSlider] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
  const [resetKey, setResetKey] = useState(0);
 const headers = [
    { key: "name", name: "Name" },
    { key: "emailemp_id", name: "EMP ID" },
    { key: "status", name: "Status" },
    { key: "category", name: "Category" },
    { key: "division", name: "Division" },
    { key: "offer_status", name: "Offer Status" },
  ];

const data = [
  {
    id: "1",
    name: "John Doe",
    emailemp_id: "123",
    status: "Accepted",
    category: "Category A",
    division: "Division B",
    offer_status: "Pending",
  },
  {
    id: "2",
    name: "Jane Smith",
    emailemp_id: "456",
    status: "Rejected",
    category: "Category B",
    division: "Division C",
    offer_status: "Accepted",
  },
  {
    id: "3",
    name: "Bob Johnson",
    emailemp_id: "789",
    status: "Yet to Start",
    category: "Category C",
    division: "Division D",
    offer_status: "Rejected",
  },
  {
    id: "4",
    name: "Alice Johnson",
    emailemp_id: "789",
    status: "In Progress",
    category: "Category C",
    division: "Division D",
    offer_status: "Rejected",
  },
  {
    id: "5",
    name: "Alice Johnson",
    emailemp_id: "789",
    status: "Pending",
    category: "Category C",
    division: "Division D",
    offer_status: "Rejected",
  }
]

  const handleRowClick = (row) => {
    navigate(`${row.id}`);
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
    <Slider size="large" headline={"Add Candidates"} showSlider={showSlider} setShowSlider={setShowSlider}>
        <CandidateForm setShowSlider={setShowSlider}/>
    </Slider>
  
   <div className="p-3 py-2 flex justify-between items-center">
  <div className="text-lg">Candidates</div>
  <div className="flex gap-4">
    <div className="flex border rounded-md items-center px-2 py-1 w-64">
      <FontIcon iconName={"search"} />
      <input
        placeholder="Search..."
        className="outline-none text-sm ml-2 w-full"
        type="text"
      />
    </div>
    <button
      onClick={() => setShowSlider(true)}
      className="bg-[#3F3F3F] py-1 px-3 text-white rounded-md text-sm flex items-center"
    >
      <span className="text-base mr-1">+</span>Add Candidates
    </button>
  </div>
</div>

<div className="p-5">
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
)};

export default CandidatesMain;