import React, { useState } from 'react';

// Example interactive widget: any component defined here can be dropped into the post body
const LearningRateDemo = () => {
  const [lr, setLr] = useState(0.1);
  // Gradient descent on f(x) = x^2 starting at x = 1: x <- x - lr * 2x
  const steps = Array.from({ length: 20 }, (_, i) => Math.pow(1 - 2 * lr, i));
  const maxAbs = Math.max(...steps.map(Math.abs), 1);

  return (
    <figure className="post-widget">
      <label>
        Learning rate: <strong>{lr.toFixed(2)}</strong>
        <input
          type="range"
          min="0.01"
          max="1.05"
          step="0.01"
          value={lr}
          onChange={(e) => setLr(Number(e.target.value))}
        />
      </label>
      <svg viewBox="0 0 200 80" role="img" aria-label="Value of x over 20 gradient steps">
        <line x1="0" y1="40" x2="200" y2="40" stroke="currentColor" strokeOpacity="0.2" />
        {steps.map((x, i) => (
          <circle key={i} cx={5 + i * 10} cy={40 - (x / maxAbs) * 35} r="2.5" fill="#8ab4f8" />
        ))}
      </svg>
      <figcaption>Gradient descent on f(x) = x². Above 0.5 it oscillates, above 1.0 it diverges.</figcaption>
    </figure>
  );
};

const HelloWorld = () => (
  <>
    <p>
      Posts are plain React components, so they are written in JSX: paragraphs, headings,
      images and code blocks all work as usual, and any interactive component can be embedded
      directly in the text.
    </p>

    <h2>An embedded widget</h2>
    <p>Drag the slider to change the learning rate:</p>
    <LearningRateDemo />

    <h2>Adding a new post</h2>
    <ol>
      <li>Create <code>src/Posts/my-post.js</code> exporting a component with the post body.</li>
      <li>Register it in the <code>drafts</code> list in <code>src/Posts/index.js</code> with a slug, title, date and summary; drafts only appear under <code>npm start</code>.</li>
      <li>When it is ready, move the entry to <code>published</code> and remove <code>draft: true</code>.</li>
    </ol>
  </>
);

export default HelloWorld;
