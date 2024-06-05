import { SiMinutemailer } from "react-icons/si";
import { MdLocalPhone, MdMailOutline, MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primarybg relative z-10">
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center  px-4 py-16 md:px-16 lg:px-20 max-width bg-auto bg-no-repeat bg-left"
          
        >
          <div className="flex flex-col gap-3">
            <div>
              {/* <img src={logo} alt="Logo" className="max-w-28" /> */}
              
            <p className="text-2xl font-bold text-primarycl">BeansDay</p>
            </div>
            <p className="text-sm font-normal font-dmsans max-w-80">
            At BeansDay, we believe in the art of coffee making. Our beans are carefully selected from the finest sources around the globe, ensuring each cup is a journey of flavor. From rich roasts to delicate blends, every sip is an invitation to savor the moment. Join us and elevate your coffee experience to new heights.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start  gap-4">
            
            <div className="flex flex-col justify-start items-start  gap-4">
              <h4 className="text-xl text-left font-semibold text-primarylinks">
                Stay Up To Date
              </h4>
              <div className="flex flex-col gap-2">
                <div className="bg-white border-2 border-bordercl flex justify-between items-center rounded-md py-2 px-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className=" bg-white text-black outline-none border-none focus:outline-none placeholder:!text-black"
                  />
                  <SiMinutemailer className="text-primarycl text-lg font-bold" />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdMailOutline className="text-lg font-bold" />{" "}
                  <p className="text-sm font-normal">info@beansday.org</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdLocalPhone className="text-lg font-bold" />{" "}
                  <p className="text-sm font-normal">+92(303) 5106242</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdWhatsapp className="text-lg font-bold" />{" "}
                  <p className="text-sm font-normal">+92(303) 5106242</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-primarycl py-4">
        <p className="text-white text-sm font-normal">Copyright © 2024 BeansDay All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;