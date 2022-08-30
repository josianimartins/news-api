import PropTypes from 'prop-types';
export default function Article(props) {
  return (
    <li key={props.publishedAt}>
      <img 
        src={props.imageUrl} 
        alt={props.title}
        style={{maxWidth: '200px'}}
      />                
      <h3>{props.title}</h3>
      <small>{props.publishedAt}</small>
      <p>{props.description}</p>
    </li>
  );
}

Article.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}