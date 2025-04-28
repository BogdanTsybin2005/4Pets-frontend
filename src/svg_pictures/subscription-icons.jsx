import * as React from "react"




function LeftHalf() {
  return (
    <svg
      width={19}
      height={38}
      viewBox="0 0 19 38"
      fill="none"
    >
      <path d="M19 0a19 19 0 000 38V0z" fill="#D5007F" />
    </svg>
  )
}

function RightHalf() {
    return (
      <svg
        width={19}
        height={38}
        viewBox="0 0 19 38"
        fill="none"
      >
        <path d="M0 38A19 19 0 000 0v38z" fill="#B8B1FF" />
      </svg>
    )
}



export function FreeSubscriptionIcon() {
    return (
        <div>
            <LeftHalf/>
            <RightHalf/>
        </div>
    )
}

export function BasicSubscriptionIcon() {
    return (
      <svg
        width={38}
        height={38}
        viewBox="0 0 38 38"
        fill="none"
      >
        <path fill="#D5007F" d="M0 0H18.4865V38H0z" />
        <path fill="#B8B1FF" d="M18.4863 0H37.9998V38H18.4863z" />
        <path fill="#DCD8FF" d="M18.4863 18.4863H37.9998V37.9998H18.4863z" />
      </svg>
    )
}


export function ProSubscriptionIcon() {
    return (
      <svg
        width={42}
        height={45}
        viewBox="0 0 44 46"
        fill="none"
      >
        <path
          d="M43.164 33.646l.01-.005h-.019L32.53 27.883l-10.644-5.768-10.645 5.768L.615 33.641H.596l.01.005-.01.005h.018l10.627 5.758 10.644 5.769 10.644-5.769 10.626-5.758h.018l-.01-.005z"
          fill="#DCD8FF"
        />
        <path
          d="M43.164 11.531l.01-.005h-.019L32.53 5.769 21.885 0 11.24 5.768.615 11.527H.596l.01.004-.01.005h.018l10.627 5.759 10.644 5.768 10.644-5.768 10.626-5.759h.018l-.01-.005z"
          fill="#D5007F"
        />
        <path
          d="M.614 11.063v23.052l21.27-11.526L.615 11.063zM43.155 11.063v23.052L21.885 22.59l21.27-11.526z"
          fill="#B8B1FF"
        />
      </svg>
    )
}