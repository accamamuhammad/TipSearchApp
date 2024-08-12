import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Label = (props) => {
  const [language, setLanguage] = useState(props.language);

  const languageClasses = {
    python: "bg-python",
    javascript: "bg-javascript",
    java: "bg-java",
    c: "bg-c",
    ruby: "bg-ruby",
    go: "bg-go",
  };

  useEffect(() => {
    setLanguage(props.language);
  }, [props.language]);

  return (
    <div
      className={`${languageClasses[language]} rounded-full text-xs font-sgMedium py-1.5 px-3.5 pb-[7px]`}
    >
      {language}
    </div>
  );
};

Label.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Label;
