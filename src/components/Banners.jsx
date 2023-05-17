export default function Banners() {
  return (
    <section className="flex justify-between my-10">
      <div className="flex items-center justify-center">
        <img className='me-4 w-[2.5rem] h-[2.5rem]' src="https://img.icons8.com/ios/50/in-transit--v1.png" />
        <span>
          <h6 className="font-bold">Free Shipping</h6>
          <p>Free Shipping on all order</p>
        </span>
      </div>
      <div className="flex items-center justify-center">
        <img className='me-4 w-[2.5rem] h-[2.5rem]' src="https://img.icons8.com/ios/50/warranty--v1.png" />
        <span>
          <h6 className="font-bold">Mooney Quanantoo</h6>
          <p>30 Days Money Back</p>
        </span>
      </div>
      <div className="flex items-center justify-center">
      <img className='me-4 w-[2.5rem] h-[2.5rem]' src="https://img.icons8.com/ios/50/headset--v1.png" />
        <span>
          <h6 className="font-bold">Online Support 24/7</h6>
          <p>Technical Support 27/7</p>
        </span>
      </div>
      <div className="flex items-center justify-center">
      <img className='me-4 w-[2.5rem] h-[2.5rem]' src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/external-credit-card-black-friday-5-basic-sbts2018-outline-sbts2018.png" />
        <span>
          <h6 className="font-bold">Secure Payment</h6>
          <p>All Cards Accepted</p>
        </span>
      </div>
    </section>
  );
}
