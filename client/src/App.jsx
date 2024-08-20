import React, { useState, useEffect, useCallback } from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar';
import GettingStarted from './components/GettingStarted';
import Endpoints from './components/Endpoints';
import Changelog from './components/Changelog';

function App() {
  const [activeId, setActiveId] = useState('intro');
  const [allPoses, setAllPoses] = useState([]);
  const [poseById, setPoseById] = useState({});
  const [posesByChakra, setPosesByChakra] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChakra, setSelectedChakra] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [showAllPoses, setShowAllPoses] = useState(false);

  useEffect(() => {
    const fetchAllPoses = async () => {
      try {
        const response = await fetch('api/poses');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllPoses(data);
      } catch (error) {
        console.error('Error fetching all poses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPoses();
  }, []);

  const handleToggleAllPoses = () => {
    setShowAllPoses(!showAllPoses);
  };

  const handleFetchPoseById = async () => {
    setLoading(true);
    try {
      const response = await fetch(`api/poses/${selectedId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPoseById(data);
    } catch (error) {
      console.error(`Error fetching pose by ID ${selectedId}:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchPosesByChakra = async () => {
    setLoading(true);
    try {
      const response = await fetch(`api/poses/${selectedChakra}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosesByChakra(data);
    } catch (error) {
      console.error(`Error fetching poses by chakra ${selectedChakra}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('h2[id], h3[id]');
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-2">
          <Sidebar activeId={activeId} />
        </div>
        <div className="col-span-8 space-y-8">
          <h1 id="title" className="text-4xl md:text-6xl lg:text-8xl text-center font-extrabold uppercase p-0 md:p-8">Your Favorite Yogi's Favorite Yoga API</h1>
          <GettingStarted />
          <Endpoints 
            handleToggleAllPoses={handleToggleAllPoses}
            showAllPoses={showAllPoses}
            allPoses={allPoses}
            loading={loading}
            handleFetchPoseById={handleFetchPoseById}
            handleFetchPosesByChakra={handleFetchPosesByChakra}
            selectedChakra={selectedChakra}
            setSelectedChakra={setSelectedChakra}
            posesByChakra={posesByChakra}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            poseById={poseById}
          />
          <Changelog />
          <h6 id="footer" className="pt-12 text-xs text-center">Made with &hearts; by <a href="https://github.com/samanthacabrera" target='_blank' rel="noopener noreferrer">Sam</a></h6>
        </div>
      </div>
    </>
  );
}

export default App;
