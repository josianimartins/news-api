import PropTypes from 'prop-types';

import Article from "../Article";

export default function ArticleList({articles}) {

  const listArticles = articles.map((article) => (
    <Article
      key={article.id}
      title={article.title}
      publishedAt={article.publishedAt}
      description={article.description}              
    />      
  ));

  return (
    <ul>
      {listArticles}
    </ul>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
}