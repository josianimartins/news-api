import PropTypes from 'prop-types';
export default function Article(props) {
  return (
    <li key={props.id}>
      <h3>{props.title}</h3>
      <small>{props.publishedAt}</small>
      <p>{props.description}</p>
    </li>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}