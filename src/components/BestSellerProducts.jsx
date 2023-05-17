import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/contansts";
import { useFetch } from "../hooks/useFetch";
import PropTypes from "prop-types";
export default function BestSellerProudcts() {
  const { data, error } = useFetch(`${BASE_URL}?limit=8`);
  return (
    <>
      <span className="text-center">
        <h2 className="font-extrabold text-[3rem]">Best Seller Products</h2>
        <p>Speaks There are many variations passages</p>
      </span>
      <section className="grid grid-cols-4 mb-8">
        {
          // data.length > 0
          error ? (
            data.map((productData) => (
              <CardBestSellerProduct data={productData} key={productData.id} />
            ))
          ) : (
            <h3>Loading</h3>
          )
        }
      </section>
    </>
  );
}

function CardBestSellerProduct({ data }) {
  const { title, price, image, id } = data;
  return (
    <Link to={`/products/${id}`} className="card-best-seller w-[90%] mt-5">
      <img
        src={image}
        alt={`image ${title}`}
        className="w-[100%] h-[11rem] object-contain p-7 bg-gradient-to-br from-[#e1e1e1] to-[#f5f5f5] rounded-[1rem] mb-4"
      />
      <h6>{title.split(" ").splice(0, 4).join(" ")}</h6>
      <p className="font-bold">${price}</p>
    </Link>
  );
}

CardBestSellerProduct.propTypes = {
  data: PropTypes.object.isRequired,
};
