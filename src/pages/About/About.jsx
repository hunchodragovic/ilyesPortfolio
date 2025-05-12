import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Web Developer, E-commerce solutions Specialist.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello, I'm Ilyes Ait Yahiatene, a web developer who helps
                businesses and small enterprises stand out online by building
                fast, custom websites and e-commerce stores.
                <span className="font-bold text-white">
                  I specialize in creating modern, scalable digital solutions
                </span>{" "}
                that enhance performance, improve usability, and support
                business growth.
              </p>

              <p className="text-white">
                While platforms like WordPress and Shopify are popular for quick
                setups, they often lead to generic designs and performance
                issues as traffic or content grows. That’s where I step in —
                building ultra-fast, custom websites using advanced technologies
                like Next.js.
              </p>

              <p className="text-white">
                I also develop tailored dashboards that let clients manage
                products, pricing, and orders effortlessly — without requiring
                any technical background. My goal is to empower you with tools
                that are both powerful and easy to use.
              </p>

              <p className="text-white">
                If you're looking for a clean, professional online presence or a
                customized e-commerce platform that truly represents your brand,
                I'd be happy to discuss your project and share examples of my
                past work.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm committed to delivering high-performance solutions
                    through clean, maintainable code — always learning, always
                    building. Let's create something impactful together.
                  </p>
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ilyes Ait
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
