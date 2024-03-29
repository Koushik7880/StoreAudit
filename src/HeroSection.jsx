import framLogo from './assets/frame.png'
export default function HeroSection() {
  return (
    // <!-- Begin hero -->
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-md:w-full"
              src={framLogo}
              width="326"
              height="290"
              alt="frame"
            />
          </div>
          <div>
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
              Store Audit
            </h1>
            <p className="text-lg my-2 opacity-60">
              Precision in Your Palm: Revolutionizing Store Audits!
            </p>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Hero -->
  )
}
