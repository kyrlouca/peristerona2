import React from 'react'

export default function  DevSize() {
  return (
    <div>
      
    </div>
  )
}

 const size = {
  mobile: "380px",
  tablet: "768px",
}

export const devices = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
}
