import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Tag = (props) => {
  const [language, setLanguage] = useState(props.language);
  const [languageNumber, setLanguageNumber] = useState(0);

  const languageClasses = [
    "bg-Python",
    "bg-JavaScript",
    "bg-Java",
    "bg-C++",
    "bg-Ruby",
    "bg-Go",
  ];

  useEffect(() => {
    const handleFilterClasses = () => {
      if (language === "Python") {
        setLanguageNumber(0);
      } else if (language === "JavaScript") {
        setLanguageNumber(1);
      } else if (language === "Java") {
        setLanguageNumber(2);
      } else if (language === "Ruby") {
        setLanguageNumber(3);
      } else if (language === "C++") {
        setLanguageNumber(4);
      } else if (language === "Go") {
        setLanguageNumber(5);
      } else {
        return;
      }
    };
    handleFilterClasses();
  }, [language, props.language]);

  useEffect(() => {
    setLanguage(props.language);
  }, [props.language]);

  return (
    <div
      className={`${languageClasses[languageNumber]} rounded-full text-[0.55rem] sm:text-[0.6rem] font-sgMedium py-1 px-2 pb-[5px]`}
    >
      {language}
    </div>
  );
};

Tag.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Tag;
