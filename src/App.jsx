import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Label from "./components/label";

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);
  const [currentDescription, setCurrentDescription] = useState([]);

  const handleAddTip = () => {
    setToggleAddTask(!toggleAddTask);
  };

  const handleToggleDescription = () => {
    setToggleDescription(false);
  };

  const openDescription = (description) => {
    setCurrentDescription([
      description.title,
      description.description,
      description.language,
    ]);
    setToggleDescription(true);
  };

  return (
    <main className="w-screen h-screen bg-mainBG flex items-center justify-center">
      <div className="w-screen md:w-[700px] h-[500px] gap-1 mx-5 md:mx-0 flex-col rounded-2xl bg-white flex items-start justify-start">
        <div className="w-full px-3 sm:px-5 flex gap-3 flex-col">
          <div className="w-full pt-5 pb-2 flex flex-row items-center justify-between">
            <h1 className="font-sgBold text-xl sm:text-2xl">Tech Tips</h1>
            <div
              onClick={handleAddTip}
              className="w-6 h-6 rounded-full bg-black cursor-pointer flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPlus} size="sm" className="text-white" />
            </div>
          </div>
          <div className="pr-2 mb-2 bg-filterBg rounded-lg">
            <select
              name="filter-language"
              className="w-full tex-xs font-sgRegular relative p-2 sm:p-2.5 bg-filterBg rounded-lg"
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
        <ul className="w-full">
          {Data.map((item, index) => (
            <li
              key={index}
              className="border-b-[0.2px] px-4 sm:px-7 border-formStroke py-3.5 flex flex-row items-center justify-between"
            >
              <p className="w-[190px] sm:w-[360px] font-sgRegular text-[0.65rem] sm:text-xs">
                {item.title}
              </p>
              <Label language={item.language} />
              <div
                onClick={() => openDescription(item)}
                className="w-5 h-5 flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="2xs"
                  className="cursor-pointer"
                />
              </div>
            </li>
          ))}
        </ul>
        <div
          className={
            toggleDescription
              ? "w-full sm:w-[500px] p-4 sm:p-5 rounded-lg absolute bg-gray-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 flex-col items-center justify-center"
              : "hidden"
          }
        >
          <p
            onClick={handleToggleDescription}
            className={`${`bg-${currentDescription[2]}`} ${"cursor-pointer px-2 py-0 pb-1 rounded-lg text-2xl"}`}
          >
            x
          </p>
          <h2 className="text-center">{currentDescription[0]}</h2>
          <p className="text-xs font-sgLight leading-6">
            {currentDescription[1]}
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
