import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h6>{title}</h6>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
