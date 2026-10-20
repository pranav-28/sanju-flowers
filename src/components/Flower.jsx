
import "./Flower.css";

export default function Flower({ flower, index, onClick }) {
  return (
    <button
      className="flower"
      style={{
        "--petal-color": flower.color,
        "--bloom-delay": `${index * 0.3}s`,
        "--sway-delay": `${index * 0.4}s`,
      }}
      onClick={() => onClick(flower)}
      aria-label={`Open message: ${flower.title}`}
    >
      <span className="flower-head" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span
            className="petal"
            key={i}
            style={{ "--petal-index": i }}
          />
        ))}
        <span className="flower-center" />
      </span>

      <span className="flower-stem" aria-hidden="true">
        <span className="leaf leaf-left" />
        <span className="leaf leaf-right" />
      </span>
    </button>
  );
}
