import { Link } from 'react-router-dom';
import AppImage05 from '../../assets/coffee (1).jpg';
export default function Single_product() {
  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">

{/* Page content */}
<div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

  {/* Content */}
  <div className='w-full'>
    <div className="mb-3">
      <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to='/'> Back To Listing</Link>
    </div>
    <header className="mb-4">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-2">Product Heading ✨</h1>
      <p>Product Description</p>
    </header>

    {/* Meta */}

    {/* Image */}
    <figure className="mb-6">
      <img className="w-full rounded-sm" src={AppImage05} width="640" height="360" alt="Product" />
    </figure>

    {/* Product content */}
    <div>
      <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Overview</h2>
      <p className="mb-6">Product Details</p>
      
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>E-commerce: Better lorem ipsum generator.</li>
        <li>Booking: Lorem ipsum post generator.</li>
        <li>Retail: Better lorem ipsum generator.</li>
        <li>Services: Better lorem ipsum generator.</li>
      </ul>
    </div>




  </div>

  {/* Sidebar */}
  <div>
    <div className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
      
      <div className="mb-4">
        <button className="btn w-full bg-primarycl text-white" >Buy Now </button>
      </div>
      <div className="text-xs text-slate-500 italic text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <a className="underline hover:no-underline" href="#0">Terms</a>.</div>
    </div>
  </div>

</div>

</div>
    </div>
  )
}
