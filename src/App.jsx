import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
/** 
import Label from "./components/label";
<Label language={"javascript"} />
*/

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false);

  const handleAddTip = () => {
    setToggleAddTask(!toggleAddTask);
  };

  return (
    <main className="w-screen h-screen bg-mainBG flex items-center justify-center">
      <div className="w-screen md:w-[700px] h-[500px] gap-5 mx-5 md:mx-0 flex-col rounded-2xl bg-white flex items-start justify-start">
        <div className="w-full px-5 flex gap-3 flex-col">
          <div className="w-full pt-5 pb-2 flex flex-row items-center justify-between">
            <h1 className="font-sgBold text-2xl">Tech Tips</h1>
            <div
              onClick={handleAddTip}
              className="w-7 h-7 rounded-full bg-black cursor-pointer flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPlus} className="text-white" />
            </div>
          </div>
          <div className="pr-2 bg-filterBg rounded-lg">
            <select
              name="filter-language"
              className="w-full tex-xs font-sgRegular relative p-3 bg-filterBg rounded-lg"
            >
              <option value="python">Filter language</option>
              <option value="python">python</option>
              <option value="javascript">javascript</option>
              <option value="java">java</option>
              <option value="c">c</option>
              <option value="ruby">ruby</option>
              <option value="go">go</option>
            </select>
          </div>
        </div>
        <div className="w-full h-[0.2px] bg-formStroke" />
        <div
          className={
            toggleAddTask
              ? "w-full px-10 absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              : "hidden"
          }
        >
          <Form />
        </div>
      </div>
    </main>
  );
}

export default App;
