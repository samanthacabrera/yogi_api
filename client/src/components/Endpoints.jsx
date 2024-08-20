import React, { useState } from 'react';
import CopyBox from '../utils/CopyBox.jsx';

const Endpoints = ({
  handleToggleAllPoses,
  showAllPoses,
  allPoses,
  loading,
  handleFetchPoseById,
  handleFetchPosesByChakra,
  selectedChakra,
  setSelectedChakra,
  posesByChakra,
  selectedId,
  setSelectedId,
  poseById
}) => {
  
  const [showAllResponse, setShowAllResponse] = useState(false);
  const [showIdResponse, setShowIdResponse] = useState(false);
  const [showChakraResponse, setShowChakraResponse] = useState(false);

  const toggleShowIdResponse = () => {
    if (!showIdResponse) {
      handleFetchPoseById(); // Fetch pose by ID when showing the response
    }
    setShowIdResponse(!showIdResponse);
  };

  const toggleShowChakraResponse = () => {
    if (!showChakraResponse) {
      handleFetchPosesByChakra(); // Fetch poses by chakra when showing the response
    }
    setShowChakraResponse(!showChakraResponse);
  };

  return (
    <div className="space-y-10">
      <h2 id="endpoints" className="heading">Endpoints</h2>
      
      {/* GetAll */}
      <div className="bg-white bg-opacity-5 border border-gray-200 shadow-md rounded-lg p-8">
        <h3 id="getAll" className="subheading">
          <span className="uppercase">Get</span> all poses
        </h3>
        <p className="text-sm mb-4">
          This endpoint provides a comprehensive view of the entire database of yoga poses accessible through this API.
        </p>
        <CopyBox content="http://localhost:5000/poses" />
        <div className="flex items-center mt-4 space-x-4">
          <button
            className="btn bg-indigo-200 hover:bg-indigo-300 text-gray-800 rounded-md py-2 px-4"
            onClick={() => setShowAllResponse(!showAllResponse)}
            disabled={loading}
          >
            {showAllResponse ? "Hide Response" : "See Response"}
          </button>
        </div>
        {showAllResponse && (
          <div className="mt-4 space-y-2">
            <p className="text-green-600">&#x2022; 200 Response</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-h-80">
              {loading ? 'Loading...' : JSON.stringify(allPoses, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* GetById */}
      <div className="bg-white bg-opacity-5 border border-gray-200 shadow-md rounded-lg p-8">
        <h3 id="getById" className="subheading">
          <span className="uppercase">Get</span> a specific pose
        </h3>
        <p className="text-sm mb-4">
          This endpoint provides information about a particular yoga pose based on its ID.
        </p>
        <CopyBox content="http://localhost:5000/poses/<ID>" />
        <div className="flex items-center mt-4 space-x-4">
          <select
            id="poseId"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="border border-gray-300 rounded-md py-1 px-2"
          >
            <option value="">Select ID</option>
            {allPoses.map(pose => (
              <option key={pose.id} value={pose.id}>{pose.id}</option>
            ))}
          </select>
          <button
            className="btn bg-indigo-200 hover:bg-indigo-300 text-gray-800 rounded-md py-2 px-4"
            onClick={toggleShowIdResponse}
            disabled={loading || !selectedId}
          >
            {showIdResponse ? "Hide Response" : "See Response"}
          </button>
        </div>
        {showIdResponse && poseById.id && (
          <div className="mt-4 space-y-2">
            <p className="text-green-600">&#x2022; 200 Response</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-h-80">
              {loading ? 'Loading...' : JSON.stringify(poseById, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* GetByChakra */}
      <div className="bg-white bg-opacity-5 border border-gray-200 shadow-md rounded-lg p-8">
        <h3 id="getByChakra" className="subheading">
          <span className="uppercase">Get</span> poses of specific chakra
        </h3>
        <p className="text-sm mb-4">
          This endpoint enables you to filter yoga poses based on their associated chakras. 
        </p>
        <CopyBox content="http://localhost:5000/poses/<CHAKRA>" />
        <div className="flex items-center mt-4 space-x-4">
          <select
            id="poseChakra"
            value={selectedChakra}
            onChange={(e) => setSelectedChakra(e.target.value)}
            className="border border-gray-300 rounded-md py-1 px-2"
          >
            <option value="">Select Chakra</option>
            {["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"].map(chakra => (
              <option key={chakra} value={chakra}>{chakra}</option>
            ))}
          </select>
          <button
            className="btn bg-indigo-200 hover:bg-indigo-300 text-gray-800 rounded-md py-2 px-4"
            onClick={toggleShowChakraResponse}
            disabled={loading || !selectedChakra}
          >
            {showChakraResponse ? "Hide Response" : "See Response"}
          </button>
        </div>
        {showChakraResponse && posesByChakra.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-green-600">&#x2022; 200 Response</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-h-80">
              {loading ? 'Loading...' : JSON.stringify(posesByChakra, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Endpoints;
