import { FaCaretUp, FaSortDown } from "react-icons/fa6";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IProducat {
  id: number;
  nameBn: string;
  today: number;
  image: string;
  change: {
    dir: string;
    pct: number;
  };
}

const HeadLine = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.status}`);
  }
  const data: IProducat[] = await res.json();

  return (
    <div className="flex gap-5 my-2 pl-2 border-b border-gray-300 bg-[#F0F5F0]">
      <MarqueeText className="py-1" direction="right" duration={10}>
        {data.map((prod) => {
          return (
            <div key={prod.id} className="flex gap-2 px-2 items-center">
              <p>{prod.image}</p>
              <p>{prod.nameBn}</p>
              <div>
                {prod.change.dir === "up" ? (
                  <p className="flex gap-1 text-[#D03739] items-center">
                    <FaCaretUp size={12} />
                    {prod.change.pct}
                  </p>
                ) : (
                  <p className="flex gap-1 text-green-600 items-center">
                    <FaSortDown size={12} /> {prod.change.pct}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default HeadLine;
