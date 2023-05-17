import ArticleOffer from '../components/ArticleOffer'
import BestSellerProudcts from '../components/BestSellerProducts'
import Main from '../components/Main'
import PrincipalHeader from '../components/PrincipalHeader'
import beatsOffer from '../../public/beats-offer.png';
import watchOffer from '../../public/watch-offer.webp';

export default function Home() {
  return (
    <>
      <PrincipalHeader />
      <Main />
      <ArticleOffer title='FINE SMILE' bgColor='bg-[#e52c34]' image={beatsOffer}/>
      <BestSellerProudcts />
      <ArticleOffer title='HAPPY HOURS' bgColor='bg-[#2ecd70]' image={watchOffer}/>
    </>
  )
}
