import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase")
  }

  const handledownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase")
  }

  const handleClearText = () =>{
    let newText = "";
    setText(newText)
    props.showAlert("cleared text")
  }

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const handleTitleClick = () => {
    let newText = toTitleCase(text);
    setText(newText);
    props.showAlert("converted to Titlecase")
  };

  const handleOnChange = (event) => {
    console.log("onchanege")
    setText(event.target.value)
  }
  const[text, setText] = useState('enter text here')
  return (
    <>
      <div className='container'>
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="myBox" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.heading}</label>
                <input type="text" id="myBox" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleOnChange} value={text}/>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handledownClick}>Convert to Lowercase</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleTitleClick}>Convert to titlecase</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleClearText}>Clear Text</button>
            </div>
        </form>
      </div>
      <div className='container'>
        <div className='max-w-sm mx-auto'>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">your text summary</h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-4 dark:text-gray-400">{text.split(" ").length} and {text.length}</p>       
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-4 dark:text-gray-400">{0.008 * text.split(" ").length} minutes read</p>      
        </div>
      </div>
   </>
  )
}
