import PropTypes from 'prop-types';
import '../styles/ArticleOffer.scss'

export default function ArticleOffer({title, image, bgColor}) {
  return (
    <article className={`article-offer flex justify-between items-center ${bgColor} rounded-[1rem] py-9 px-14 relative mt-[11rem] mb-[5rem] min-h-fit`}>
      <img src={image} alt="offer" className='absolute h-[120%] object-cover top-[-44%] left-[17%]' />
      <span className='w-[40%] ms-6'>
        <small className='text-opacity-60 text-white text-lg'>20% off</small>
        <h2 className='text-white text-[4rem] font-extrabold'>{title}</h2>
        <small className='text-opacity-60 text-white text-lg'>19 Nov To 7 Dec</small>
      </span>
      <span className='w-[30%] me-10'>
        <p className='text-white'>Beats Solo Air</p>
        <h3 className='text-white text-[2rem] font-bold'>Summer Sale</h3>
        <p className='text-opacity-60 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, esse voluptas. Asperiores, quisquam.</p>
        <button className='btn bg-white my-2'>Shop</button>
      </span>
    </article>
  )
}

ArticleOffer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
}