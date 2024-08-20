import React from 'react';

const Sidebar = ({ activeId }) => (
  <div id="sidebar" className="h-screen fixed flex flex-col justify-center space-y-4">
        <a href="#start" className="link">Getting Started</a>
        <a href="#intro" className={`link pl-6 ${activeId === 'intro' ? 'active' : ''}`}>Introduction</a>
        <a href="#howto" className={`link pl-6 ${activeId === 'howto' ? 'active' : ''}`}>How to Use</a>
        <a href="#responses" className={`link pl-6 ${activeId === 'responses' ? 'active' : ''}`}>Responses</a>

        <a href="#endpoints" className="link">Endpoints</a>
        <a href="#getAll" className={`link pl-6 ${activeId === 'getAll' ? 'active' : ''}`}>Get All</a>
        <a href="#getById" className={`link pl-6 ${activeId === 'getById' ? 'active' : ''}`}>Get By ID</a>
        <a href="#getByChakra" className={`link pl-6 ${activeId === 'getByChakra' ? 'active' : ''}`}>Get By Chakra</a>

        <a href="#changelog" className={`link ${activeId === 'changelog' ? 'active' : ''}`}>Changelog</a>
  </div>
);

export default Sidebar;
