/* eslint-disable react/jsx-no-undef */
import herobg from "../../assets/herobg.jpg";
import { Link } from "react-router-dom";

import AppImage05 from '../../assets/coffee (1).jpg';
import AppImage06 from '../../assets/coffee (2).jpg';
import AppImage07 from '../../assets/coffee (3).jpg';
import AppImage08 from '../../assets/coffee (4).jpg';
// import AppImage09 from '../../assets/coffee (5).jpg';
export default function Homepage() {
  return (
    <div>
      <div className="relative min-h-[550px] flex flex-col justify-center items-start" style={{
        backgroundImage: `url(${herobg})`,
        backgroundRepeat: 'no-repeat',
        // backgroundPosition:'cover',
        backgroundSize: '100% 100%',

      }}>
        <div className="px-4 md:px-10 lg:px-20 py-10 max-w-screen-lg">
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-xl md:text-4xl font-bold text-white uppercase">
              Indulge in the Perfect Cup of Coffee <br />{" "}
              <span className="text-primarycl capitalize">Experience the Essence of Crafted Coffee</span>
            </h1>
            <p className="text-lg font-normal text-white">
              From rich roasts to delicate blends, every sip is an invitation to savor the moment
            </p>
            <Link to="/">
              <button className="bg-primarycl text-white text-sm font-medium text-center px-6 py-3 rounded-md">
                Connect Wallet
              </button>
            </Link>
          </div>

        </div>
      </div>
      <div className="mt-8 px-4 lg:px-10 pb-10">
        <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-5">Products</h2>
        <div className="grid grid-cols-12 gap-6">

          {/* Card 1 */}
          <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative">
                <img className="w-full" src={AppImage05} width="286" height="160" alt="Application 05" />
                {/* Popular label */}
                <div className="absolute top-0 right-0 mt-4 mr-4">
                  <div className="inline-flex items-center text-xs font-medium text-slate-100 dark:text-slate-300 bg-slate-900/60 dark:bg-slate-800/60 rounded-full text-center px-2 py-0.5">
                    <svg className="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1" viewBox="0 0 12 12">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                    <span>Popular</span>
                  </div>
                </div>
              </div>
              {/* Card Content */}
              <div className="grow flex flex-col p-5">
                {/* Card body */}
                <div className="grow">
                  {/* Header */}
                  <header className="mb-2">
                    <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Morning Bliss</h3>
                    <div className="text-sm">Wake up to a smooth blend of aromatic beans, perfect for starting your day right</div>
                  </header>
                  {/* Rating and Price */}
                  <div className="flex flex-wrap items-center justify-between mb-5">
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mr-2">
                      <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                      {/* Rate */}
                      <div className="text-sm font-medium whitespace-nowrap">
                        <span>4.7</span>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
                {/* Card footer */}
                <div>
                
               <Link to='/singleproduct'> <button className="btn-sm w-full bg-primarycl text-white" >Buy Now</button></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative">
                <img className="w-full" src={AppImage06} width="286" height="160" alt="Application 06" />
              </div>
              {/* Card Content */}
              <div className="grow flex flex-col p-5">
                {/* Card body */}
                <div className="grow">
                  {/* Header */}
                  <header className="mb-2">
                    <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Sunrise Roast</h3>
                    <div className="text-sm">
                      A bold and invigorating brew that welcomes every morning with robust flavor</div>
                  </header>
                  {/* Rating and Price */}
                  <div className="flex flex-wrap items-center justify-between mb-5">
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mr-2">
                      <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                      {/* Rate */}
                      <div className="text-sm font-medium whitespace-nowrap">
                        <span>4.7</span>
                      </div>
                    </div>
                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
                {/* Card footer */}
                <div>
                
               <Link to='/singleproduct'> <button className="btn-sm w-full bg-primarycl text-white" >Buy Now</button></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative">
                <img className="w-full" src={AppImage07} width="286" height="160" alt="Application 07" />
              </div>
              {/* Card Content */}
              <div className="grow flex flex-col p-5">
                {/* Card body */}
                <div className="grow">
                  {/* Header */}
                  <header className="mb-2">
                    <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Misty Mornings</h3>
                    <div className="text-sm">
                      Delight in the misty aroma and delicate taste of our signature morning blend</div>
                  </header>
                  {/* Rating and Price */}
                  <div className="flex flex-wrap items-center justify-between mb-5">
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mr-2">
                      <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                      {/* Rate */}
                      <div className="text-sm font-medium whitespace-nowrap">
                        <span>4.7</span> 
                      </div>
                    </div>
                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
                {/* Card footer */}
                <div>
              
                <Link to='/singleproduct'> <button className="btn-sm w-full bg-primarycl text-white" >Buy Now</button></Link>
                 </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative">
                <img className="w-full" src={AppImage08} width="286" height="160" alt="Application 08" />
              </div> {/* Card Content */}
              <div className="grow flex flex-col p-5">
                {/* Card body */}
                <div className="grow">
                  {/* Header */}
                  <header className="mb-2">
                    <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1">Soleil Supreme</h3>
                    <div className="text-sm">
                      Bask in the radiant flavor of our premium coffee, crafted to brighten your day</div>
                  </header>
                  {/* Rating and Price */}
                  <div className="flex flex-wrap items-center justify-between mb-5">
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mr-2">
                      <svg className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 16 16">
                        <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                      </svg>
                      {/* Rate */}
                      <div className="text-sm font-medium whitespace-nowrap">
                        <span>4.7</span>
               
                      </div>
                    </div>
                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <div className="inline-flex text-sm font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2 py-0.5">$89.00</div>
                    </div>
                  </div>
                </div>
                {/* Card footer */}
                <div>
                
               <Link to='/singleproduct'> <button className="btn-sm w-full bg-primarycl text-white" >Buy Now</button></Link>
               </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
