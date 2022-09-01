import PropTypes from 'prop-types';

import { ArticleListContainer } from './styles';
import Article from "../Article";
export default function ArticleList({articles}) {

  const listArticles = articles.map((article) => (
    <Article
      url={article.url}
      imageUrl={article.urlToImage}
      title={article.title}
      description={article.description}   
      source={article.source.name}           
    />      
  ));
  
  return (
    <ArticleListContainer>
      {listArticles}
    </ArticleListContainer>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
}