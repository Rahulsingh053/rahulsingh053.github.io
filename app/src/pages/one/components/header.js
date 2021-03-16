export default function Header({ data }) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        width: "96%",
        padding: "2%"
      }}>
      <div style={{}}>{data.name}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}>
        {data.menu.map(item => {
          return (
            <div style={{ paddingRight: 10 }} key={item}>
              {item}
            </div>
          );
        })}
      </div>
    </header>
  );
}
