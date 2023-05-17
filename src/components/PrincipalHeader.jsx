import { Link } from 'react-router-dom'
import beatsHero from '../../public/beats-hero.png'

export default function PrincipalHeader() {
  return (
    <header 
      className='
        flex flex-col bg-gradient-to-br from-[#dcdcdc] to-[#eeeeee] rounded-2xl pt-[6rem] ps-[9rem] pe-[5rem] pb-14
        justify-center min-h-[90vh] relative
        '
      >
      <div className='text-left w-[100%]'>
        <img src={beatsHero} alt="hero-image" className='absolute w-[53%] top-[2.3rem] left-[34%] rotate-[15deg]' />
        <h4 className='text-[1.5rem] font-bold'>Beats Solo</h4>
        <h3 className='text-[4rem] font-extrabold'>Wireless</h3>
        <h2 className='text-[#f8f8f8] text-[8.2rem] font-extrabold'>HEADPHONE</h2>
      </div>
      <div className='flex justify-between w-[100%]'>
        <Link to='/categories' className='btn bg-red-700 text-white'>Shop By Category</Link>
        <span className='text-end w-[20rem]'>
          <h6 className='font-bold'>Description</h6>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, id minus at laudantium in temporibus.</p>
        </span>
      </div>
    </header>
  )
}
