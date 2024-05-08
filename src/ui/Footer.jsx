import React from 'react'
function Footer() {
  return (
    <footer className="bg-[#023b5e]   w-full shadow-lg bottom-0 lg:fixed lg:left-0 lg:bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-[12px] text-center text-white font-semibold">
          &#169; 2024{' '}
          <a href="https://google.com/" className="hover:underline">
            Inspiration &trade;
          </a>
          &nbsp;All rights reserved. Contact Us
        </span>
      </div>
    </footer>
  )
}

export default Footer
