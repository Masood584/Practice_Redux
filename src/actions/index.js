import React from "react";

export const increase = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const clear = () => {
  return {
    type: "CLEAR",
  };
};
