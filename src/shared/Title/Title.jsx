import React from "react";
import PropTypes from "prop-types";
import "./Title.scss";

const Title = ({ level, text, className, style }) => {
  const Heading = `h${level}`;

  return (
    <Heading className={`editable-title h${level} ${className}`} style={style}>
      {text}
    </Heading>
  );
};

Title.defaultProps = {
  level: 1,
  text: "Título editable",
  className: "",
  style: {},
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Title;
