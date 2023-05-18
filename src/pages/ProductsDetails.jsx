import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../constants/contansts";
import '../styles/ProductsDetails.scss';
import PropTypes from 'prop-types';
import star from '../../public/star.svg';

export default function ProductsDetails() {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(`${BASE_URL}/${id}`);

  console.log(error, data);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems((prevItems) => [...prevItems, data])
    console.log(data)
  };
  
  
  

  return (
    <>
      {isPending ? (
        <h2>Loading :3 ...</h2>
      ) : (
        <DetailsCard data={data} addToCart={addToCart} />
      )}
    </>
  );
}

function DetailsCard({ data, addToCart }) {
  const { image, title, description, price, rating } = data;

  const renderRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= Math.round(rating.rate); i++) {
      stars.push(<img key={`star-rate-${i}`} src={star} alt="star image" className="me-6" />);
    }
    return stars;
  };

  return (
    <div className="flex mt-8 justify-start items-center h-[100%]" id="product-details">
      <img src={image} alt={`${title} image`} className="w-[30%] object-contain" />
      <div className="h-full ms-16">
        <h2 className="text-[2.3rem] font-bold">{title.split(' ').splice(0, 6).join(' ')}</h2>
        <h4 className="text-[1.8rem] my-5">$ {price}</h4>
        <p className="my-5">{description}</p>
        <span className="flex items-center">
          {renderRatingStars()}
          <h5 className="text-[1rem] ms-2">{rating.count} opiniones</h5>
        </span>
        <span className="flex mt-10">
          <button className="btn btn-add me-5 font-semibold" onClick={() => addToCart(data)}>Agregar al carrito</button>
          <button className="btn bg-red-500 text-white font-semibold">Comprar</button>
        </span>
      </div>
    </div>
  );
}

DetailsCard.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};
