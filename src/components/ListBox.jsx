import React from 'react';
import PropTypes from 'prop-types';

const ListBox = (props) => {
  const article = props;
  return (
    <div className="grid grid-flow-col grid-cols-8 w-full rounded-xl p-5 hover:bg-[#30475E] hover:bg-opacity-10 ">
      <div className="col-span-6">
        <div className="text-xl font-bold ">{article.title}</div>
        <div>{article.content}</div>
      </div>
      <div className=" text-[#30475E]">{article.tag}</div>
      <div>{article.date}</div>
    </div>
  );
};

ListBox.propsTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tag: PropTypes.string,
  date: PropTypes.string,
};

export default ListBox;
