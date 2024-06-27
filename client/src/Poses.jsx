import React, { useState, useEffect } from 'react';

const Poses = () => {
    const [allPoses, setAllPoses] = useState([]);
    const [poseById, setPoseById] = useState({});
    const [posesByChakra, setPosesByChakra] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedChakra, setSelectedChakra] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [showAllPoses, setShowAllPoses] = useState(false); // State for showing all poses

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
        setShowAllPoses(!showAllPoses); // Toggle showAllPoses state
    };

    const handleFetchPoseById = () => {
        setLoading(true);
        fetchPoseById(selectedId);
    };

    const handleFetchPosesByChakra = () => {
        setLoading(true);
        fetchPosesByChakra(selectedChakra);
    };

    const fetchPoseById = async (id) => {
        try {
            const response = await fetch(`api/poses/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPoseById(data);
        } catch (error) {
            console.error(`Error fetching pose by ID ${id}:`, error);
        } finally {
            setLoading(false);
        }
    };

    const fetchPosesByChakra = async (chakra) => {
        try {
            const response = await fetch(`api/poses/${chakra}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosesByChakra(data);
        } catch (error) {
            console.error(`Error fetching poses by chakra ${chakra}:`, error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
    
            <div>
                <button className="btn bg-slate-200 rounded p-2 "
                        onClick={handleToggleAllPoses}
                        disabled={loading}>
                    {showAllPoses ? "Hide All Poses" : "Show All Poses"}
                </button>
            </div>

            {showAllPoses && (
                <>
                    <ul>
                        {allPoses.map(pose => (
                            <li key={pose.id}>
                                <p>{pose.id} - {pose.name} - {pose.chakra} chakra</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}

                <label htmlFor="poseId"></label>
                <select id="poseId"
                        value={selectedId}
                        onChange={(e) => setSelectedId(e.target.value)}
                        className="select">
                    <option value="">Select ID</option>
                    {allPoses.map(pose => (
                        <option key={pose.id} value={pose.id}>{pose.id}</option>
                    ))}
                </select>
                <button className="btn bg-slate-200 rounded p-2 mx-4"
                        onClick={handleFetchPoseById}
                        disabled={loading || !selectedId}>
                    Fetch Pose by ID
                </button>

            {poseById.id && (
                <div className="mb-4">
                    <p>{poseById.name} - {poseById.chakra} chakra</p>
                </div>
            )}

            <div>
                <label htmlFor="poseChakra"></label>
                <select id="poseChakra"
                        value={selectedChakra}
                        onChange={(e) => setSelectedChakra(e.target.value)}
                        className="select">
                    <option value="">Select Chakra</option>
                    {["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"].map(chakra => (
                        <option key={chakra} value={chakra}>{chakra}</option>
                    ))}
                </select>
                <button className="btn bg-slate-200 rounded p-2 mx-4"
                        onClick={handleFetchPosesByChakra}
                        disabled={loading || !selectedChakra}>
                    Fetch Poses by Chakra
                </button>
            </div>

          
            <ul>
                {posesByChakra.map(pose => (
                    <li key={pose.id}>
                        <p>{pose.name} - {pose.chakra} chakra</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Poses;
