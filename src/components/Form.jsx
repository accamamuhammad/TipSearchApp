const Form = () => {
  const InputStyling =
    "w-full border-[0.5px] bg-mainBG p-2 text-black font-sgRegular text-xs rounded-md border-formStroke";

  return (
    <section className="sm:w-[450px] w-full h-fit bg-mainBG p-5 gap-5 rounded-2xl shadow-md flex flex-col items-start justify-start">
      <div className="flex flex-col gap-2">
        <h1 className="font-sgBold text-2xl">Add a Tip</h1>
        <p className="font-sgLight text-xs">
          Share your knowledge with others 🧠
        </p>
      </div>
      <div className="w-full flex gap-1 flex-col items-start">
        <label htmlFor="title" className="text-black font-sgMedium">
          Title
        </label>
        <input
          type="text"
          name="title"
          placeholder="Enter a title"
          className={InputStyling}
        />
      </div>
      <div className="w-full flex gap-1 flex-col items-start">
        <label htmlFor="description" className="text-black font-sgMedium">
          Description
        </label>
        <textarea
          type="text"
          name="description"
          placeholder="Give a detailed explanation of the tip here"
          className={`${InputStyling} ${"h-32 flex items-start justify-start resize-none"}`}
        />
      </div>
      <div className="w-full flex gap-1 flex-col items-start">
        <label htmlFor="language" className="text-black font-sgMedium">
          Choose a language
        </label>
        <div className="w-full border pr-2 rounded-lg">
          <select
            name="language"
            placeholder="What language is the tip"
            className={`${InputStyling} ${"border-none"}`}
          >
            <option value="python">language</option>
            <option value="python">python</option>
            <option value="javascript">javascript</option>
            <option value="java">java</option>
            <option value="c">c</option>
            <option value="ruby">ruby</option>
            <option value="go">go</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default Form;
