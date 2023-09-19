import React from "react"

interface CardsProps {
  img: string,
  children: React.ReactNode,
}
export const Card: React.FC<CardsProps> = ({ img, children }) => {
  return (
    <div>
      {img && <img src={img} className="card-img-top" alt="..." width="100%"/>}
      { children }
    </div>
  )
}
