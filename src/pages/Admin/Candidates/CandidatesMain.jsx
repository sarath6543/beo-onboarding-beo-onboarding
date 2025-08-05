import React, { useState } from "react";
import FontIcon from "../../../beolayer/components/base/Icons/FontIcon.jsx";
import { Slider } from "../../../beolayer/components/base/slider/Slider.jsx";
import Table from "../../../beolayer/components/base/Table/Table";
import CandidateForm from "./form/CandidateForm.jsx";


const CandidatesMain = () => {
  const [showSlider,setShowSlider] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const headers = [
    { key: "name", name: "Name" },
    { key: "status", name: "Status" },
    { key: "email", name: "Email" },
    { key: "offerstatus", name: "Offer Letter Status" },
    { key: "role", name: "Role" },
  ];

  // const data = [
  //   { id: "1", name: "Alice", email: "alice@example.com",status: "success", role: "Admin" },
  //   { id: "2", name: "Bob", email: "bob@example.com", role: "User" },
  //   { id: "3", name: "Charlie", email: "charlie@example.com", role: "Moderator" },
  //   { id: "4", name: "David", email: "david@example.com", role: "Admin" },
  //   { id: "5", name: "Eve", email: "eve@example.com", role: "User" },
  //   { id: "6", name: "Frank", email: "frank@example.com", role: "Moderator" },
  //   { id: "7", name: "Grace", email: "grace@example.com", role: "Admin" },
  //   { id: "8", name: "Henry", email: "henry@example.com", role: "User" },
  //   { id: "9", name: "Ivy", email: "ivy@example.com", role: "Moderator" },
  //   { id: "10", name: "Jack", email: "jack@example.com", role: "Admin" },
  //   { id: "11", name: "Kate", email: "kate@example.com", role: "User" },
  //   { id: "12", name: "Liam", email: "liam@example.com", role: "Moderator" },
  //   { id: "13", name: "Mia", email: "mia@example.com", role: "Admin" },
  //   { id: "14", name: "Noah", email: "noah@example.com", role: "User" },
  //   { id: "15", name: "Olivia", email: "olivia@example.com", role: "Moderator" },
  //   { id: "16", name: "Parker", email: "parker@example.com", role: "Admin" },
  //   { id: "17", name: "Quinn", email: "quinn@example.com", role: "User" },
  //   { id: "18", name: "Riley", email: "riley@example.com", role: "Moderator" },
  //   { id: "19", name: "Sophia", email: "sophia@example.com", role: "Admin" },
  //   { id: "20", name: "Theo", email: "theo@example.com", role: "User" },
  // ];
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

  <div className="p-5 py-8 flex justify-between items-center">
      <div className="text-2xl">Candidates</div>
      <div className="flex gap-7 ">
          <div className="flex border rounded-lg items-center p-2 w-75">
              <FontIcon iconName={"search"}/>
              <input placeholder=" Search..." className="outline-none focus:outline-none focus:ring-0 focus:border-transparent text-sm " type="text" />
          </div>
          <button onClick={()=>setShowSlider(true)} className="bg-[#3F3F3F] p-1 text-white rounded-lg text-sm flex items-center px-3"><span className="text-xl pe-1">+</span>Add Candidates</button>
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