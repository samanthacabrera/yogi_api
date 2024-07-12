import './App.css'
import Responses from './Responses'
import CopyBox from './CopyBox'

function App() {
  return (
    <>
      <h1 id="title" className="text-slate-300 text-9xl m-12 font-extrabold uppercase">Your Favorite Yogi's Favorite Yoga API</h1>

      <div className="grid grid-cols-2">
        <div className="col-end-1 p-12 border-r-2 flex flex-col space-y-12">
          <a href="#intro">Getting Started</a>
          <a href="#endpoints">Endpoints</a>
          <a href="#responses">Responses</a>
          <a href="#changelog">Changelog</a>
        </div>

        <div className="space-y-8 text-left p-12">
          <h2 id="intro" className="pb-8  border-b-4 text-4xl">Getting Started</h2>

           <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p>This API provides comprehensive access to a diverse collection of yoga poses, allowing you to integrate yoga pose data into your applications effortlessly.</p>
            <p>Ensure to handle loading states, errors, and parse JSON responses appropriately in your application to provide a seamless user experience.</p>
            <p>This API currently does not require authentication for accessing its endpoints. However, if you plan to integrate it into a production environment or expose sensitive data, consider implementing authentication and authorization mechanisms.</p>

          <h2 id="endpoints" className="pt-8 text-4xl border-t-4">Poses</h2>
            <h6><span className="font-semibold">GET</span> all poses</h6>
            <p className="text-sm">This endpoint provides a comprehensive view of the entire database of yoga poses accessible through this API.</p>
            <CopyBox content="https://api.com/poses" />

            <h6><span className="font-semibold">GET</span> a specific pose</h6>
            <p className="text-sm">This endpoint allows you to fetch detailed information about a particular yoga pose based on its ID.</p>
            <CopyBox content="https://api.com/poses" />

            <h6><span className="font-semibold">GET</span> poses of specific chakra</h6>
            <p className="text-sm">This endpoint enables you to filter yoga poses based on their association with different chakras such as Root, Sacral, Solar Plexus, Heart, Throat, Third Eye, and Crown. </p>
            <CopyBox content="https://api.com/poses" />
       
          <h2 id="changelog" className="pt-8 text-4xl border-t-4">Changelog</h2>
          <h6>API version: 1.0.0</h6>
          <p><span className="underline">June 12, 2024</span> - Initialized quick start guide and changelog documentation for the API. Completed functionality to perform GET requests for all yoga poses.</p>
          <p><span className="underline">June 25, 2024</span> - Included reponse status codes and their meanings. </p>
        </div>

        <div>
          <Responses />
        </div>
      </div>
      
      <h6 id="footer" className="mt-12 text-xs text-slate-400">Made with &hearts; by <a href="https://github.com/samanthacabrera" target='_blank'>Sam</a></h6>
    </>
  )
}

export default App
