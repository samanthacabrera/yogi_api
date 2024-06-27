import React, { useState, useEffect } from 'react';

const Responses = () => {
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

return (
    <div id="responses" className="ml-12 space-y-12 text-left p-12">

        <h2 className="pb-8 text-4xl border-b-4">Responses</h2>
        
        <div className="pb-8 border-b-4 space-y-12">
            <h6> <span className="text-green-600"> &#x2022; </span> 200 - Success repsonse</h6>
            <h6> <span className="text-red-600"> &#x2022; </span> 404 - Pose not found</h6>
            <h6> <span className="text-red-600"> &#x2022; </span> 500 - Internal Server Error</h6>
        </div>
     
        <button className="btn bg-slate-200 rounded p-2"
                onClick={handleToggleAllPoses}
                disabled={loading}>
            {showAllPoses ? "Hide All Poses" : "Fetch All Poses"}
        </button>
         
        {showAllPoses && (
            <div className=" space-y-2">
                <p> <span className="text-green-600"> &#x2022; </span> 200 Reponse</p>
                <pre className="bg-gray-200 p-4 rounded-md overflow-auto">
                    {loading ? 'Loading...' : JSON.stringify(allPoses, null, 2)}
                </pre>
            </div>
        )}

            <div>
                <div className="flex space-x-6">
                    <button className="btn bg-slate-200 rounded p-2"
                            onClick={handleFetchPoseById}
                            disabled={loading || !selectedId}>
                        Fetch Pose by ID:
                    </button>
                    <select id="poseId"
                            value={selectedId}
                            onChange={(e) => setSelectedId(e.target.value)}
                            className="select">
                        <option value="">Select ID</option>
                        {allPoses.map(pose => (
                            <option key={pose.id} value={pose.id}>{pose.id}</option>
                        ))}
                    </select>
                </div>
                {poseById.id && (
                    <div className="my-8 space-y-2">
                        <p> <span className="text-green-600"> &#x2022; </span> 200 Reponse</p>
                        <pre className="bg-gray-200 p-4 rounded-md overflow-auto">
                            {loading ? 'Loading...' : JSON.stringify(poseById, null, 2)}
                        </pre>
                    </div>
                )}
            </div>

        <div className="flex space-x-6">
            <button className="btn bg-slate-200 rounded p-2"
                    onClick={handleFetchPosesByChakra}
                    disabled={loading || !selectedChakra}>
                Fetch Poses by Chakra:
            </button>
            <select id="poseChakra"
                    value={selectedChakra}
                    onChange={(e) => setSelectedChakra(e.target.value)}
                    className="select">
                <option value="">Select Chakra</option>
                {["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"].map(chakra => (
                    <option key={chakra} value={chakra}>{chakra}</option>
                ))}
            </select>
        </div>
        <div className="my-8 space-y-2">
            <p> <span className="text-green-600"> &#x2022; </span> 200 Reponse</p>
            <pre className="bg-gray-200 p-4 rounded-md overflow-auto">
                {loading ? 'Loading...' : JSON.stringify(posesByChakra, null, 2)}
            </pre>
        </div>
    </div>

    );
};

export default Responses;
