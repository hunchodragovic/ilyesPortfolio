import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Learner, Innovator
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
                Hello! I'm Ilyes Ait Yahiatene, a passionate JavaScript
                developer focused on building modern, user-friendly web
                applications with React and Next.js. I've developed full-stack
                projects like Amazon and LinkedIn clones, an e-commerce
                platform, and an online ordering app — with the goal of
                mastering full-stack development through hands-on experience.{" "}
                <span className="font-bold text-white">
                  As a junior developer with big goals
                </span>
                , I'm focused on improving every day to become a skilled
                full-stack engineer.
              </p>

              <p className="text-white">
                Currently, I'm diving deeper into backend development with
                Node.js, Express, and MongoDB to grow as a full-stack developer
                and build more complete, seamless applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    As a lifelong learner and problem-solver, I'm driven by
                    curiosity, creativity, and a desire to bring ideas to life
                    through clean, efficient code. I'm continuously improving my
                    skills to contribute meaningful work to the developer
                    community and grow into a versatile, full-stack engineer.
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
