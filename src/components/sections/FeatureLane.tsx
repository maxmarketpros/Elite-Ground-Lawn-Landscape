export default function FeatureLane() {
  const features = [
    {
      info: "#1",
      heading: "Rated",
      text: "With 70+ 5-star reviews, we're the top choice for lawn and landscaping services in the area.",
    },
    {
      info: (
        <>
          <strong>O</strong>%
        </>
      ),
      heading: "Stress",
      text: "We handle everything — from clean-up to disposal — so you don't have to lift a finger.",
    },
    {
      info: "NO",
      heading: "Hidden Fees",
      text: "Transparent pricing from the start. What we quote is what you pay — no surprises.",
    },
  ];

  return (
    <section className="bg-feature-bg py-5">
      <div className="max-w-[1160px] mx-auto px-5">
        <div className="flex gap-6 max-lg:flex-col">
          {features.map((feature) => (
            <div key={feature.heading} className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="font-[family-name:var(--font-hey-comic)] text-[63px] leading-[100%] text-black">
                  {feature.info}
                </div>
              </div>
              <div>
                <div
                  className="text-[20px] font-medium mb-1"
                  style={{
                    fontFamily: "var(--font-montserrat-var), Montserrat, sans-serif",
                    color: "#4b5176e6",
                  }}
                >
                  {feature.heading}
                </div>
                <div className="text-[14px] leading-[140%] text-[#4b5176cc]">
                  {feature.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
