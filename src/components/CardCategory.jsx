import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

export default function CardCategory({ categoryData, bgColor }) {

  return (
    <div 
      style={{backgroundColor: bgColor}}
      className={`w-[49%] card flex justify-between p-7 ps-14 rounded-2xl mt-[1rem]`}>
      <span className="flex flex-col justify-between w-[50%]">
        <h5 style={bgColor === '#363636' ? {color: '#fff'} : null }>Category</h5>
        <h4 className="text-white">{ categoryData }</h4>
        <Link className="btn w-[fit-content] bg-red-700 text-white">Ver mas</Link>
      </span>
      <img src='https://picsum.photos/200/200' alt="image" />
    </div>
  )
}

CardCategory.propTypes = {
  categoryData: PropTypes.string.isRequired, // Add the missing prop type validation
  bgColor: PropTypes.string.isRequired
};