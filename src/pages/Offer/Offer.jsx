import React from "react";
import PageLayout from "../../beolayer/layout/PageLayout";


const Offer = () => {
    return (
        <PageLayout title="Offer">
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Review & Accept Offer</h1>
            <p className="text-sm text-gray-500 mt-1">
              Your joining date with BEO is <span className="text-black font-semibold">20-06-2025</span>
            </p>
          </div>
          {/* <div className="space-x-2">
            <button className="border border-gray-300 px-4 py-1 rounded text-sm">Print</button>
            <button className="border border-gray-300 px-4 py-1 rounded text-sm">Download</button>
          </div> */}
        </div>
 
        {/* Offer Letter Text */}
        <div className="border border-gray-300 rounded-md h-64 overflow-y-auto p-4 text-sm text-gray-700 bg-gray-50 mb-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum aliquam
            lacinia. Praesent luctus arcu nec justo ornare consequat...
          </p>
          <p className="mt-4">
            Pellentesque vehicula, urna eu dapibus cursus, metus orci feugiat turpis...
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <p className="mt-4">
            Pellentesque vehicula, urna eu dapibus cursus...
          </p>
        </div>
 
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 items-stretch">
  {/* Left Column */}
  <div className="flex flex-col justify-between h-full">
    <div>
      <label className="text-sm font-medium text-gray-700 block mb-1">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="mt-4">
      <label className="text-sm font-medium text-gray-700 block mb-1">Comment</label>
      <textarea
        placeholder="Enter your comment"
        className="w-full border rounded px-3 py-2 text-sm h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col h-full">
    <label className="text-sm font-medium text-gray-700 block mb-1">Upload Sign</label>
    <div className="flex-1 border  rounded-lg p-4 text-center text-sm text-gray-500 cursor-pointer hover:bg-gray-100 flex flex-col justify-center">
      Click to upload
      <div className="text-xs mt-2 text-gray-400">PDF, DOCX, TXT | &lt; 10 MB</div>
    </div>
  </div>
</div>



 
        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 border border-gray-300 rounded text-sm">Decline</button>
          <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded text-sm">
            Accept
          </button>
        </div>
      </div>
    </div>
        </PageLayout>
    );
};

export default Offer;