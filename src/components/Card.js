import './card.css';
const Card = (props) => {
    const priceList = props.variants.map((element) => {
        return element.price;
    })
    const minPrice = Math.min(...priceList);
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.imgUrl} alt=''></img>
            </div>
            <h3>
                <span>{props.title}</span>
                <span>{minPrice} AED</span>
            </h3>
            <p className='paragraph'>{props.description}</p>
            <div className="btn-container">
                <button>QUICK SHOP</button>
                <button>PERSONALIZE</button>
            </div>
        </div>
    )
}
export default Card;