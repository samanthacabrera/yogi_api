// import React, { useState, useEffect } from 'react';

// const Poses = () => {
//     const [allPoses, setAllPoses] = useState([]);
//     const [poseById, setPoseById] = useState({});
//     const [posesByChakra, setPosesByChakra] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedChakra, setSelectedChakra] = useState('');
//     const [selectedId, setSelectedId] = useState('');

//     useEffect(() => {
//         // Function to fetch all poses
//         const fetchAllPoses = async () => {
//             try {
//                 const response = await fetch('api/poses');
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setAllPoses(data);
//             } catch (error) {
//                 console.error('Error fetching all poses:', error);
//             }
//         };

//         // Function to fetch pose by ID
//         const fetchPoseById = async (id) => {
//             try {
//                 const response = await fetch(`api/poses/${id}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setPoseById(data);
//             } catch (error) {
//                 console.error(`Error fetching pose by ID ${id}:`, error);
//             }
//         };

//         // Function to fetch poses by chakra
//         const fetchPosesByChakra = async (chakra) => {
//             try {
//                 const response = await fetch(`api/poses/${chakra}`);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setPosesByChakra(data);
//             } catch (error) {
//                 console.error(`Error fetching poses by chakra ${chakra}:`, error);
//             } finally {
//                 setLoading(false); // Assuming we finish loading after fetching by chakra
//             }
//         };

//         // Fetch all poses initially
//         fetchAllPoses().then(() => setLoading(false));
//     }, []);

//     const handleFetchAllPoses = () => {
//         setLoading(true);
//         fetchAllPoses().then(() => setLoading(false));
//     };

//     const handleFetchPoseById = () => {
//         setLoading(true);
//         fetchPoseById(selectedId);
//     };

//     const handleFetchPosesByChakra = () => {
//         setLoading(true);
//         fetchPosesByChakra(selectedChakra);
//     };

//     return (
//         <div>
//             <h1>Yoga Poses</h1>

//             {/* Fetch all poses button */}
//             <button onClick={handleFetchAllPoses} disabled={loading}>
//                 Fetch All Poses
//             </button>

//             {/* Select pose by ID dropdown */}
//             <div>
//                 <label htmlFor="poseId">Select Pose by ID:</label>
//                 <select id="poseId" value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
//                     <option value="">Select ID</option>
//                     {allPoses.map(pose => (
//                         <option key={pose.id} value={pose.id}>{pose.id}</option>
//                     ))}
//                 </select>
//                 <button onClick={handleFetchPoseById} disabled={loading || !selectedId}>
//                     Fetch Pose by ID
//                 </button>
//             </div>

//             {/* Select poses by chakra dropdown */}
//             <div>
//                 <label htmlFor="poseChakra">Select Poses by Chakra:</label>
//                 <select id="poseChakra" value={selectedChakra} onChange={(e) => setSelectedChakra(e.target.value)}>
//                     <option value="">Select Chakra</option>
//                     {['Root', 'Heart', 'Throat'].map(chakra => (
//                         <option key={chakra} value={chakra}>{chakra}</option>
//                     ))}
//                 </select>
//                 <button onClick={handleFetchPosesByChakra} disabled={loading || !selectedChakra}>
//                     Fetch Poses by Chakra
//                 </button>
//             </div>

//             {/* Display all poses */}
//             <div>
//                 <h2>All Poses:</h2>
//                 <ul>
//                     {allPoses.map(pose => (
//                         <li key={pose.id}>
//                             <p>{pose.name} - {pose.chakra} chakra</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Display pose by ID */}
//             {poseById && (
//                 <div>
//                     <h2>Pose by ID:</h2>
//                     <p>{poseById.name} - {poseById.chakra} chakra</p>
//                 </div>
//             )}

//             {/* Display poses by chakra */}
//             <div>
//                 <h2>Poses by Chakra ({selectedChakra}):</h2>
//                 <ul>
//                     {posesByChakra.map(pose => (
//                         <li key={pose.id}>
//                             <p>{pose.name} - {pose.chakra} chakra</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Poses;


import React, { useState, useEffect } from 'react';

const Poses = () => {
    const [allPoses, setAllPoses] = useState([]);
    const [poseById, setPoseById] = useState({});
    const [posesByChakra, setPosesByChakra] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedChakra, setSelectedChakra] = useState('');
    const [selectedId, setSelectedId] = useState('');

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

        fetchAllPoses();
    }, []);

    const handleFetchAllPoses = () => {
        setLoading(true);
        fetchAllPoses();
    };

    const handleFetchPoseById = () => {
        setLoading(true);
        fetchPoseById(selectedId);
    };

    const handleFetchPosesByChakra = () => {
        setLoading(true);
        fetchPosesByChakra(selectedChakra);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Yoga Poses</h1>

            <div className="mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleFetchAllPoses}
                        disabled={loading}>
                    Fetch All Poses
                </button>
            </div>

            <div className="mb-4">
                <label htmlFor="poseId" className="mr-2">Select Pose by ID:</label>
                <select id="poseId"
                        value={selectedId}
                        onChange={(e) => setSelectedId(e.target.value)}
                        className="p-2 border border-gray-300 rounded">
                    <option value="">Select ID</option>
                    {allPoses.map(pose => (
                        <option key={pose.id} value={pose.id}>{pose.id}</option>
                    ))}
                </select>
                <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleFetchPoseById}
                        disabled={loading || !selectedId}>
                    Fetch Pose by ID
                </button>
            </div>

            <div className="mb-4">
                <label htmlFor="poseChakra" className="mr-2">Select Poses by Chakra:</label>
                <select id="poseChakra"
                        value={selectedChakra}
                        onChange={(e) => setSelectedChakra(e.target.value)}
                        className="p-2 border border-gray-300 rounded">
                    <option value="">Select Chakra</option>
                    {['Root', 'Heart', 'Throat'].map(chakra => (
                        <option key={chakra} value={chakra}>{chakra}</option>
                    ))}
                </select>
                <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleFetchPosesByChakra}
                        disabled={loading || !selectedChakra}>
                    Fetch Poses by Chakra
                </button>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">All Poses:</h2>
                <ul className="list-disc pl-4">
                    {allPoses.map(pose => (
                        <li key={pose.id}>
                            <p>{pose.name} - {pose.chakra} chakra</p>
                        </li>
                    ))}
                </ul>
            </div>

            {poseById && (
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Pose by ID:</h2>
                    <p>{poseById.name} - {poseById.chakra} chakra</p>
                </div>
            )}

            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Poses by Chakra ({selectedChakra}):</h2>
                <ul className="list-disc pl-4">
                    {posesByChakra.map(pose => (
                        <li key={pose.id}>
                            <p>{pose.name} - {pose.chakra} chakra</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Poses;
