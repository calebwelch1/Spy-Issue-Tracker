import React, { Component, useState } from "react";
import Typist from "react-typist";

export default function TypeAnimation() {
  const [typistIndex, setTypistIndex] = useState(0);
  const words = [
    "Software Developer",
    "Creative",
    "Front End Designer",
    "Web Developer",
    "Full Stack Engineer",
  ];
  return (
    <Typist
      key={typistIndex}
      onTypingDone={() => setTypistIndex(typistIndex + 1)}
    >
      {words.map((word) => [
        <span>{word}</span>,
        <Typist.Backspace count={word.length} delay={1400} />,
      ])}
    </Typist>
  );
}
