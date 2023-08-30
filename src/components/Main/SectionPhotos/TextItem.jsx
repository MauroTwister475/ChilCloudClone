
export default function PhotoItem(props) {
  return (
    <div className="photo textItem">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}