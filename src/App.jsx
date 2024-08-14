import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Tag from "./components/Tag";

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false);
  const [toggleDescription, setToggleDescription] = useState(false);
  const [currentDescription, setCurrentDescription] = useState([]);
  const [currentChoosenLanguage, setCurrentChoosenLanguage] = useState("");
  const [formDataUser, setFormDataUser] = useState({
    title: "",
    description: "",
    language: "",
  });

  const [Data, setData] = useState([
    {
      title: "Optimize Loops with List Comprehensions",
      description:
        "In Python, loops are a fundamental part of coding, but they can sometimes be verbose or inefficient. By using list comprehensions, you can transform loops into more concise and readable one-liners. List comprehensions not only make your code cleaner but also optimize performance by reducing the overhead of append operations. This approach is particularly effective when you're filtering, mapping, or performing simple operations on elements within a list.",
      language: "Python",
    },
    {
      title: "Avoid Bugs with === Over ==",
      description:
        "In JavaScript, the == operator performs type coercion, which means it attempts to convert the values being compared into the same type before making the comparison. This can lead to unexpected and hard-to-debug issues. By using the === operator, which checks for both value and type equality, you avoid the pitfalls of type coercion, leading to more predictable and reliable code. This practice is especially important in large codebases where implicit type conversion can cause subtle bugs.",
      language: "JavaScript",
    },
    {
      title: "Use StringBuilder for Efficient Concatenation",
      description:
        "In Java, concatenating strings in a loop using the + operator can lead to performance issues due to the creation of multiple immutable String objects. Instead, use StringBuilder for more efficient concatenation. StringBuilder allows you to modify strings without creating new objects, which reduces memory usage and increases performance, especially in scenarios with extensive string manipulations within loops.",
      language: "Java",
    },
    {
      title: "Master Memory with RAII",
      description:
        "In C++, managing resources like memory, file handles, and network connections is crucial for building stable applications. RAII (Resource Acquisition Is Initialization) is a powerful design pattern that ties resource management to object lifetime. By ensuring that resources are acquired and released in a deterministic manner, RAII helps prevent memory leaks, dangling pointers, and other resource-related issues. Understanding and applying RAII will lead to more robust and maintainable code.",
      language: "C++",
    },
    {
      title: "Simplify Code with Enumerable Methods",
      description:
        "Ruby's Enumerable module provides a collection of powerful methods like .map, .select, .reject, and .reduce that can be used to simplify and clean up your code. Instead of writing manual loops to filter or transform collections, these methods allow you to express your intent more clearly and concisely. Using Enumerable methods not only makes your code easier to read but also aligns with Ruby's philosophy of making code elegant and expressive.",
      language: "Ruby",
    },
    {
      title: "Harness Concurrency with Goroutines and Channels",
      description:
        "Go's built-in support for concurrency through Goroutines and Channels makes it easy to write programs that can perform multiple tasks simultaneously. Goroutines are lightweight threads that allow you to run functions concurrently, while Channels facilitate communication and synchronization between Goroutines. Mastering these concepts enables you to build highly efficient and scalable applications that can handle concurrent workloads gracefully.",
      language: "Go",
    },
  ]);
  const [currentFormData, setCurrentFormData] = useState(Data);

  /** 
  useEffect(() => {
    const handleFilterDataBasedOnLanguage = () => {
      if (currentChoosenLanguage === "All") {
        setCurrentFormData(Data);
      } else {
        for (let i = 0; i < Data.length; i++) {
          if (Data[i].language === currentChoosenLanguage) {
            setCurrentFormData([Data[i]]);
          }
        }
      }
    };
    handleFilterDataBasedOnLanguage();
  }, [currentChoosenLanguage, Data]);
  */

  /** Add new data */
  useEffect(() => {
    if (
      (formDataUser.title !== "") |
        (formDataUser.description !== "") |
        (formDataUser.language !== "") &&
      toggleAddTask
    ) {
      setCurrentFormData([...Data, formDataUser]);
      setData([...Data, formDataUser]);
      setToggleAddTask(false);
    } else {
      return;
    }
  }, [Data, formDataUser, toggleAddTask]);

  /** Filter Data */
  useEffect(() => {
    if (currentChoosenLanguage === "All") {
      setCurrentFormData(Data);
    } else {
      let temporaryFilter = [];
      for (let i = 0; i < Data.length; i++) {
        if (Data[i].language === currentChoosenLanguage) {
          temporaryFilter.push(Data[i]);
          setCurrentFormData(temporaryFilter);
        }
      }
    }
  }, [Data, currentChoosenLanguage, formDataUser, toggleAddTask]);

  /** Filter Tip */
  const handleAddTip = () => {
    setToggleAddTask(!toggleAddTask);
  };

  /** Get value of current filter */
  const handleCurrentFilter = (e) => {
    setCurrentChoosenLanguage(e.target.value);
  };

  /** For toggle Description of tip */
  const handleToggleDescription = () => {
    setToggleDescription(false);
  };

  /** Add Data needed for description */
  const openDescription = (description) => {
    setCurrentDescription([
      description.title,
      description.description,
      description.language,
    ]);
    setToggleDescription(true);
  };

  return (
    <main className="w-screen h-screen bg-mainBG overflow-y-hidden flex items-center justify-center">
      <div className="w-screen md:w-[650px] h-[480px] pb-5 gap-1 mx-5 md:mx-0 flex-col rounded-2xl bg-white flex items-start justify-start">
        <div className="w-full px-3 sm:px-5 flex gap-3 flex-col">
          <div className="w-full pt-5 pb-2 flex flex-row items-center justify-between">
            <h1 className="font-sgBold text-xl sm:text-2xl">Tech Tips</h1>
            <div className="w-6 h-6 rounded-full bg-black cursor-pointer flex items-center justify-center">
              <FontAwesomeIcon
                onClick={handleAddTip}
                icon={faPlus}
                size="sm"
                className="text-white "
              />
            </div>
          </div>
          <div className="pr-2 mb-2 bg-filterBg rounded-lg">
            <select
              value={currentChoosenLanguage}
              onChange={handleCurrentFilter}
              name="filter-language"
              className="w-full tex-xs font-sgRegular relative p-2 sm:p-2.5 bg-filterBg rounded-lg"
            >
              <option value="All">Filter language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C++">C++</option>
              <option value="Ruby">Ruby</option>
              <option value="Go">Go</option>
            </select>
          </div>
        </div>
        <div className="w-full h-[0.2px] bg-formStroke" />
        <ul className="w-full overflow-y-auto">
          {currentFormData.map((item, index) => (
            <li
              key={index}
              className="border-b-[0.2px] px-4 sm:px-7 border-formStroke py-3.5 flex flex-row items-center justify-between"
            >
              <p className="w-[190px] sm:w-[360px] font-sgRegular text-[0.65rem] sm:text-xs">
                {item.title}
              </p>
              <Tag language={item.language} />
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
            className={`${`bg-${currentDescription[2]}`} ${"overflow-x-auto cursor-pointer px-2 py-0 pb-1 rounded-lg text-2xl"}`}
          >
            x
          </p>
          <h2 className="text-center">{currentDescription[0]}</h2>
          <p className="text-xs font-sgLight leading-6">
            {currentDescription[1]}
          </p>
        </div>
      </div>
      <div
        className={
          toggleAddTask
            ? "w-full px-10 absolute top-1/2 left-1/2 sm:left-[70%] right-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : "hidden"
        }
      >
        <Form handlePassData={(data) => setFormDataUser(data)} />
      </div>
    </main>
  );
}

export default App;
