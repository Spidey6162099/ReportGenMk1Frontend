import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const QueryForm = () => {

    const [form,setForm]=useState({
        "mainTopic":"",
        "pages":5,
        "subtopics":""
    })

    const [downloadLink, setDownloadLink] = useState(null);

    const handleChange=(e)=>{
        
        const {name,value}=e.target
        setForm((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=async (e)=>{
        console.log("form submitted")
        e.preventDefault()

        const givenObj={...form}
        givenObj.subtopics=givenObj.subtopics==""?"System Design,Existing Solutions,Suggested Solution Benefits,Hardware and Software Requirements,Conclusion etc":givenObj.subtopics+"etc"
        let url=`https://reportgenmk1.onrender.com/v1/makePPT?topic=${givenObj.mainTopic}&requirements=${givenObj.subtopics+`atleast ${givenObj.pages} pages/topics`}`;
        
        const id = toast.loading("Please wait...")
        const response=await axios.get(url)

        if(response.status===200){
            console.log("succesfully retrieved")
            const link=response.data
            console.log("link: "+link)
            setDownloadLink(link);
            
            toast.update(id, { render: "lo behold the download button!", type: "success", isLoading: false });
        }
        else{
            toast.update(id, { render: "disaster has struck alas", type: "error", isLoading: false });
        
            console.log("error fetching report!")
        }
        //submit the post request to the endpoint
    }
  return (
    <div>


<form class="max-w-sm mx-auto flex-grow flex-1 pt-5 pb-5 bg-gray-600 p-5 rounded-xl" onSubmit={handleSubmit}>
  <div class="mb-5">
    <label for="topic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Main topic</label>
    <input onChange={handleChange}type="text" id="topic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required maxLength={200}/>
  </div>
  <div class="mb-5">
    <label for="pages" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Approx Pages</label>
    <input onChange={handleChange} type="number" id="pages" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={5} max={15} defaultValue={5} />
  </div>
    <div class="mb-5">
    <label for="subtopic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subtopics</label>
    <input onChange={handleChange} type="text" id="subtopic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='System Design,Existing Solutions,Conclusion etc.' maxLength={300} />
  </div>
  {/* <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div> */}
  <button  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    <div>
{/* <a class="bg-green-400 p-2 rounded-xl mt-5">Download</a> */}
</div>
</form>
{downloadLink && (
  <div className="mt-4 flex justify-center">
    <a
      href={downloadLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow transition duration-300 ease-in-out"
      download
    >
      ⬇ Download Report
    </a>
  </div>
)}


    </div>
  )
}

export default QueryForm