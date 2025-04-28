import * as React from "react"



export function DefaultClauseIcon() {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
    >
      <g clipPath="url(#clip0_481_220)">
        <path
          d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13z"
          fill="#D5007F"
        />
        <path
          d="M7.117 13.84l3.362 3.362 8.404-8.404"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_481_220">
          <path fill="#fff" d="M0 0H26V26H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}


export function ActiveClauseIcon() {
    return (
      <svg
        width={26}
        height={26}
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M13 26c7.18 0 13-5.82 13-13S20.18 0 13 0 0 5.82 0 13s5.82 13 13 13z"
          fill="#fff"
        />
        <path
          d="M7.117 13.84l3.362 3.362 8.404-8.404"
          stroke="#D5007F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }