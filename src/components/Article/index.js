import PropTypes from 'prop-types';

import { ArticleContainer, ArticleImage, ArticleContent } from './styles';
export default function Article(props) {
  return (
    <ArticleContainer 
      href={props.url}
      target="_blank"
    >
      <ArticleImage 
        className='article-image' 
        style={{backgroundImage: `url(${props.imageUrl})`}}>
      </ArticleImage>   
      <ArticleContent className='article-content'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <span>{props.source.name}</span>
      </ArticleContent>                       
    </ArticleContainer>
  );
}

Article.propTypes = {
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  source: PropTypes.string,
}