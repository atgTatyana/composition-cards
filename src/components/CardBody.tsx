interface CardBodyProps {
  title: string,
  text: string,
  btn: string,
}

export const CardBody = ({ title, text, btn }: CardBodyProps) => {
  return (
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{btn}</a>
    </div>
  )
}
