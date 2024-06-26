import './App.css'
import Poses from './Poses'
import CopyBox from './CopyBox'

function App() {
  return (
    <>
      <h1 className="text-blue-200 text-9xl font-extrabold m-12">EVERY YOGI'S FAVORITE API</h1>

      <div className="grid grid-cols-2">
        <div className="col-end-1 p-12 border-r-2 flex flex-col space-y-12">
          <a href="#intro">Getting Started</a>
          <a href="#endpoints">Endpoints</a>
          <a href="#changelog">Changelog</a>
        </div>

        <div className="space-y-8 text-left p-12">
          <h2 id="intro" className="text-4xl">Getting Started</h2>

          <h2 id="endpoints" className="pt-8 text-4xl border-t-4">Poses</h2>
            <h6><span className="font-semibold">GET</span> all poses</h6>
            <p className="text-sm">Description: Retrieve a list of all yoga poses.</p>
            <CopyBox content="https://api.com/poses" />

            <h6><span className="font-semibold">GET</span> a specific pose</h6>
            <p className="text-sm">Description: Retrieve details of a specific yoga pose by ID.</p>
            <CopyBox content="https://api.com/poses" />

            <h6><span className="font-semibold">GET</span> poses of specific chakra</h6>
            <p className="text-sm">Description: Search for poses associated with the following chakras: Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, and Crown. </p>
            <CopyBox content="https://api.com/poses" />

          <h2 id="response" className="pt-8 text-4xl border-t-4">Responses</h2>
            <h6> <span className="text-green-600"> &#x2022; </span> 200 - Success repsonse</h6>
            <h6> <span className="text-red-600"> &#x2022; </span> 404 - Pose not found</h6>
          <h6> <span className="text-red-600"> &#x2022; </span> 500 - Internal Server Error</h6>
          <Poses/>
          <h2 id="changelog" className="pt-8 text-4xl border-t-4">Changelog</h2>
          <h6>API version: 1.0.0</h6>
          <p><span className="underline">June 12, 2024</span> - Initialized quick start guide and changelog documentation for the API. Completed functionality to perform GET requests for all yoga poses.</p>
          <p><span className="underline">June 25, 2024</span> - Included reponse status codes and their meanings. </p>
        </div>
      </div>
    </>
  )
}

export default App
