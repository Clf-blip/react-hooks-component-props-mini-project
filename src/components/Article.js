import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let readTime = "";

  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    readTime = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    readTime = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>
        {readTime} {minutes} min read
      </p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
