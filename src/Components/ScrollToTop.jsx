import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-black p-3 rounded-full shadow-xl transition z-50"
    >
      <ChevronUp size={24} />
    </button>
  );
}

export default ScrollToTop;