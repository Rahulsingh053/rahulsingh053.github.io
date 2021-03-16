export default function About({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.aboutMe}</p>
      <img src={data.image} alt="Handsome munda" />
    </div>
  );
}
