// SPDX-License-Identifier: Apache-2.0

import GitHubIcon from "../assets/GitHubIcon";

const Footer = () => {
    return (
      <footer className="bg-black text-white py-2 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center text-center">
          {/* Left Side */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Turizak</h4>
            <p className="text-sm">Copyright © 2024</p>
            <div className="flex justify-center py-2">
            <a href="https://github.com/Turizak"><GitHubIcon /></a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  