import Navbar from "../navbar";
import Image from "next/image";
const home = () => {
  return (
    <div>
      <Navbar className="" />

      <div className="bg-white h-screen flex flex-row">
        <div className="w-1/2">
          <h1 className="text-gray-800 mt-20 pt-56 pl-16 pb-4 text-6xl">
            PassMan
          </h1>
          <h3 className="text-gray-700 text-4xl pl-16">
            Keep all of your login information safe and secure with our
            state-of-the-art password manager.
          </h3>
        </div>

        <div className="bg-white w-1/2">
          {/* <h1 className="text-gray-800 w-1/2 mt-20 pt-56 pl-16">Hi</h1> */}
          {/* <Image
            classname="h-48 w-48  mt-20 pt-56 pl-16"
            src="https://static.vecteezy.com/system/resources/previews/002/223/429/non_2x/banner-design-of-mobile-security-system-with-password-and-smart-protection-technology-illustration-concept-be-used-for-landing-page-template-ui-ux-web-mobile-app-poster-banner-website-free-vector.jpg"
            alt=""
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default home;
