import * as React from "react";

const Svg = (props) => <svg {...props} />;
const Path = (props) => <path {...props} />;
const Circle = (props) => <circle {...props} />;
const G = (props) => <g {...props} />;
const Defs = (props) => <defs {...props} />;




function FrameForTheSuccessfulRegistration() {
  return (
    <Svg
      width={172}
      height={172}
      viewBox="0 0 172 172"
      fill="none"
    >
      <Path
        d="M76.78 3.81a14.098 14.098 0 0118.44 0 14.097 14.097 0 0013.654 2.715 14.098 14.098 0 0117.035 7.056 14.099 14.099 0 0011.577 7.735 14.097 14.097 0 0113.037 13.038 14.101 14.101 0 007.735 11.577 14.097 14.097 0 017.057 17.034 14.095 14.095 0 002.716 13.656 14.098 14.098 0 010 18.438 14.095 14.095 0 00-2.716 13.655 14.097 14.097 0 01-7.057 17.035 14.102 14.102 0 00-7.735 11.576 14.096 14.096 0 01-13.037 13.038 14.098 14.098 0 00-11.577 7.735 14.098 14.098 0 01-17.035 7.056 14.097 14.097 0 00-13.655 2.717 14.099 14.099 0 01-18.438 0 14.098 14.098 0 00-13.655-2.717 14.098 14.098 0 01-17.035-7.056 14.097 14.097 0 00-11.577-7.735 14.097 14.097 0 01-13.037-13.038 14.098 14.098 0 00-7.736-11.576 14.098 14.098 0 01-7.056-17.035c1.563-4.712.53-9.9-2.716-13.655a14.097 14.097 0 010-18.438 14.098 14.098 0 002.716-13.656 14.097 14.097 0 017.057-17.034 14.097 14.097 0 007.735-11.577 14.097 14.097 0 0113.037-13.038 14.098 14.098 0 0011.577-7.735 14.098 14.098 0 0117.035-7.056c4.712 1.563 9.899.53 13.655-2.716z"
        fill="#D5007F"
      />
    </Svg>
  )
}


function SignOfTheSuccessfulRegistration() {
  return (
    <Svg
      width={48}
      height={33}
      viewBox="0 0 48 33"
      fill="none"
    >
      <Path
        d="M3.648 16.292L17.22 29.86 44.352 2.724"
        stroke="#D5007F"
        strokeWidth={5.42714}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}


export default function TheSuccessfulRegistrationIcon() {
  return (
    <div className="successful-registration-icon">
      <div>
          <FrameForTheSuccessfulRegistration />
      </div>
      <div>
          <SignOfTheSuccessfulRegistration />
      </div>
    </div>
  )
}
