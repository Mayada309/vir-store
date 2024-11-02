function OrderItem({ heading, info }: { heading: string; info: string }) {
  return (
    <p className='border-b flex justify-between items-center text-xs text-slate-500 font-bold border-slate-300 py-1 capitalize'>
      <span>{heading}</span>
      <span>{info}</span>
    </p>
  );
}

export default OrderItem;
