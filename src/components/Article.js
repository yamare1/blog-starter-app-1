export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <img src="https://yt3.ggpht.com/ytc/AKedOLSkNBClOIZNjJayMdTxRhUh6LYEXjjjCv0tMJ3-mA=s900-c-k-c0x00ffffff-no-rj"></img>
          <h2>{article.title}</h2>
          <p className="author">{`By: ${article.author}`}</p>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  );
}
