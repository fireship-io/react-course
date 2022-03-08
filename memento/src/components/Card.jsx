const Card = ({ card, image, selected, disabled, onClick }) => {
  const handleSelection = () => {
    !disabled && onClick(card);
  };

  return (
    <div className="card">
      <div className={selected && 'selected'}>
        <img alt="" src={image} className="card-face" />

        <img
          alt=""
          className="card-back"
          src={'/assets/fireship.png'}
          onClick={handleSelection}
        />
      </div>
    </div>
  );
};

export default Card;
