import LayOutUser from '@/common/Layout/LayOutUser';

const Cart = () => {
  return (
    <div className="text-white h-full  flex justify-center items-center">
      <p>سایت در حال تکمیل می‌باشد به زودی در کنار شما هستیم...</p>
    </div>
  )
}
Cart.getLayout = function getLayout(page: React.ReactElement) {
  return <LayOutUser>{page}</LayOutUser>;
};

export default Cart