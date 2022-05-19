import React from "react";
import Result from "./Result";
const InputChange = ({ index, str_arr, submit, setSubmit, handleSubmit }) => {
  let i = 1;
  return (
    <div>
      {submit ? (
        <Result str_arr={str_arr} />
      ) : (
        str_arr.map((item, idx) => {
          if (index.includes(idx)) {
            return (
              <span>
                <b >{i++}</b>
                <input id={idx}></input>
              </span>
            );
          } else return <span key={idx}>{item} </span>;
        })
      )}
    </div>
  );
};

export default InputChange;