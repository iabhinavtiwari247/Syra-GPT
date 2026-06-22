import { useEffect, useState } from "react";

const PETAL_COUNT = 18;

export function Petals() {
  const [petals, setPetals] = useState<Array<{ left: number; delay: number; dur: number; size: number }>>([]);
  useEffect(() => {
    setPetals(
      Array.from({ length: PETAL_COUNT }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        dur: 10 + Math.random() * 14,
        size: 0.6 + Math.random() * 1.2,
      })),
    );
  }, []);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${p.left}vw`,
            animation: `petal-fall ${p.dur}s linear ${p.delay}s infinite`,
            transform: `scale(${p.size})`,
          }}
        />
      ))}
    </div>
  );
}
