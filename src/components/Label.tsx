import React from 'react'

interface Props {
    children: string;
};

const Label = ({children} : Props) => {
  return (
    <div>{children}</div>
  )
}

export default Label