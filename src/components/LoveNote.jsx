
import "./LoveNote.css";

export default function LoveNote({ flower, onClose }) {
  if (!flower) return null;

  return (
    <div className="note-backdrop" onClick={onClose}>
      <section
        className="love-note"
        role="dialog"
        aria-modal="true"
        aria-labelledby="note-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="note-close"
          onClick={onClose}
          aria-label="Close love note"
        >
          ×
        </button>

        <div className="note-heart">♡</div>
        <h2 id="note-title">{flower.title}</h2>
        <p>{flower.message}</p>
        <button className="note-button" onClick={onClose}>
          Back to my flowers
        </button>
      </section>
    </div>
  );
}
