function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgLink} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category"> {props.cardCate}</span>
          <h3 className="card_title">
         {
            props.cardTitle
         }
          </h3>
          <a href={props.link}>
            <button>Watch now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Cards;
