import React from 'react';

const GettingStarted = () => (
  <>
    <h2 id="start" className="heading">Getting Started</h2>
    <div className="space-y-4">
      {/* Intro */}
      <h3 id="intro" className="subheading">Introduction</h3>
      <p>This API provides comprehensive access to a diverse collection of yoga poses, allowing you to integrate yoga pose data into your applications effortlessly.</p>
      <p>Ensure to handle loading states, errors, and parse JSON responses appropriately in your application to provide a seamless user experience.</p>
      <p>This API currently does not require authentication for accessing its endpoints.</p>
      {/* How To Use */}
      <h3 id="howto" className="subheading">How To Use</h3>
      <p>To get started with this API, clone the repository using the following command:</p>
      <pre className="bg-gray-200 p-4 rounded-md">git clone https://github.com/samanthacabrera/yogi_api</pre>
      <p>Navigate to the project directory and install the required dependencies:</p>
      <pre className="bg-gray-200 p-4 rounded-md">cd yogi_api<br/>npm install</pre>
      <p>Start the server with the following command:</p>
      <pre className="bg-gray-200 p-4 rounded-md">cd server<br />pipenv install && pipenv shell<br />python app.py</pre>
      <p>After starting the server, you can access the API locally at:</p>
      <pre className="bg-gray-200 p-4 rounded-md">http://localhost:5000</pre>
      <p>Use this base URL to interact with the various endpoints provided by the API.</p>
      {/* Responses */}
      <h3 id="responses" className="subheading">Response Codes</h3>
      <div className="space-y-6">
        <h6> <span className="text-green-600"> &#x2022; </span> 200 - Success response</h6>
        <h6> <span className="text-red-600"> &#x2022; </span> 404 - Pose not found</h6>
        <h6> <span className="text-red-600"> &#x2022; </span> 500 - Internal Server Error</h6>
      </div>
    </div>
  </>
);

export default GettingStarted;
