import React from "react";

export const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer sm:footer-horizontal bg-emerald-200 text-base-content p-10">
          <nav>
            <h6 className="footer-title text-emerald-600">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-emerald-600">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-emerald-600">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">
              <a className="btn btn-ghost text-2xl bg-emerald-700 rounded-t-full rounded-b-full rounded-l-none rounded-r-none px-6 py-2 text-white">
                petConnect
              </a>
            </h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join mt-1">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input join-item w-full cursor-pointer outline-none border border-transparent focus:border-emerald-600 focus:outline-none focus:ring-0"
                />

                <button className="btn btn-primary join-item bg-emerald-600 border-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </>
  );
};
