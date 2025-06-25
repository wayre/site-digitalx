interface HeroInternasProps {
  title: string;
  subtitle: string;
}

function HeroInternas({ title, subtitle }: HeroInternasProps) {
  return (
    <>
      {/* Banner Section */}
      <section className="w-full sm:w-[99%] h-[70px] bg-gradient-to-r from-[#1E5B94] to-[#3AADA8] relative py-8 px-2 md:pl-2 md:pr-4 mb-8 max-w-[1280px] mx-auto">
        <div className="rounded-md bg-[#214655] py-2 px-4 ml-0 md:ml-[12%] mr-0 md:mr-8 flex flex-col items-start justify-center text-white">
          <h1 className="text-[24px] font-semibold">{title}</h1>
          <p className="text-[10px] font-light">{subtitle}</p>
        </div>
      </section>
    </>
  );
}

export default HeroInternas;
