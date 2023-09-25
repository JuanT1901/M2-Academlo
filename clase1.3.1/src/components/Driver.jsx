const Driver = ({title, image}) => {
  
  //* Destructuring
  // const {title} = props;

  return (
    <article className="piloto">
      <header>
        <img src={image} alt={title} />
      </header>
      <h4>{title}</h4>
    </article>
  );
};

export default Driver;