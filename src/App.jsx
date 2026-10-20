
import { useState } from "react";
import Flower from "./components/Flower";
import LoveNote from "./components/LoveNote";
import "./App.css";

const flowers = [
  {
    id: 1,
    color: "#f6a6c8",
    title: "A little reminder 🌸",
    message:
      "You make every day a little brighter for me.",
  },
  {
    id: 2,
    color: "#d7a7f5",
    title: "My favorite person 💜",
    message:
      "I can scarcely believe we are together today. Makes me so happy",
  },
  {
    id: 3,
    color: "#f58b9c",
    title: "If I could be there 🌹",
    message:
      "I'd bring you real flowers if I could, hold your hand, lace our fingers together and I'd kiss your forehead",
  },
  {
    id: 4,
    color: "#ffca83",
    title: "A little sunshine ☀️",
    message:
      "I wanted to do a little something to make you smile today. I hope this does when you wake up :)",
  },
  {
    id: 5,
    color: "#ffb9dd",
    title: "Just us 💗",
    message:
      "With this flower, I present to you a question. Will you be my girlfriend? Your only answer is yes. ",
  },
];

export default function App() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [openedFlowers, setOpenedFlowers] = useState([]);
  const [showSurprise, setShowSurprise] = useState(false);

  function openFlower(flower) {
    setSelectedFlower(flower);
    setOpenedFlowers((previous) =>
      previous.includes(flower.id)
        ? previous
        : [...previous, flower.id]
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <div className="eyebrow">A LITTLE GIFT FOR YOU</div>
        <h1>A Garden for Sanju <span>♡</span></h1>
        <p className="subtitle">
          If I could, I'd bring you a garden full of flowers.
        </p>
        <p className="instruction">
          Pick a flower, my love. Each one has something to tell you.
        </p>
      </header>

      <section className="garden" aria-label="Your flower garden">
        {flowers.map((flower, index) => (
          <Flower
            key={flower.id}
            flower={flower}
            index={index}
            onClick={openFlower}
          />
        ))}
      </section>

      <p className="progress">
        {openedFlowers.length === flowers.length
          ? "You found every little message. 💗"
          : `${openedFlowers.length} of ${flowers.length} flowers discovered`}
      </p>

      {openedFlowers.length === flowers.length && !showSurprise && (
        <button
          className="surprise-button"
          onClick={() => setShowSurprise(true)}
        >
          One last thing for you ✨
        </button>
      )}

      {showSurprise && (
        <section className="surprise">
          <div className="surprise-heart">♥</div>
          <h2>For my Sanju</h2>
          <p>
                I keep flashing back to the day we met. I cannot believe it's been over 6 months. It still feels like yesterday that I was swiping right 
                on you, and I was sending an innocent 'Hiii' to you, no knowledge of the slightest that you would end up my girlfriend. The little break we took
                barely feels like anything at all given how long we've been back together. It feels like a little blip in time. I know I've said a lot of this  
                already, but you make me feel so special, yet so normal. The normality of our relationship feels extra special if I had to really think about it. 
                I mean, its crazy that we are long distance and yet we have such a strong relationship already. I hope we go even furthur, and get even closer. I want 
                to do it all with you. I love you so much kanna. I love you so much.
                This does not replace getting you a real letter with real flowers. But I'd like to think I'm somewhat tech savvy and hence
                I'm doing it this way. (I did use a little of ChatGPT's help with this but that's because I haven't done React.js in so long, but I 
                digress...). 
          </p>
          <p className="signature">With so much love, </p>
          <p className="signature">Your man ❤️</p>
        </section>
      )}

      <footer>Made with love, just for you. 🌷</footer>

      <LoveNote
        flower={selectedFlower}
        onClose={() => setSelectedFlower(null)}
      />
    </main>
  );
}
