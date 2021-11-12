export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <img className="popcorn" src=`${article.image}`></img>
          <h2>{article.title}</h2>
          <p className="author">{`By: ${article.author}`}</p>
          <p className="date">{`Posted: ${article.date}`}</p>
          <p className="body">{article.body}</p>
        </section>
      )}
    </article>
  );
}
