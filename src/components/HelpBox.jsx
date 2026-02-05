import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h5>{title}</h5>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
