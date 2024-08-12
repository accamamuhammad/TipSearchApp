import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Label = (props) => {
  const [language, setLanguage] = useState(props.language);

  const languageClasses = {
    Python: "bg-Python",
    JavaScript: "bg-JavaScript",
    Java: "bg-Java",
    "C++": "bg-C++",
    Ruby: "bg-Ruby",
    Go: "bg-Go",
  };

  useEffect(() => {
    setLanguage(props.language);
  }, [props.language]);

  return (
    <div
      className={`${languageClasses[language]} rounded-full text-[0.55rem] sm:text-[0.6rem] font-sgMedium py-1 px-2 pb-[5px]`}
    >
      {language}
    </div>
  );
};

Label.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Label;
