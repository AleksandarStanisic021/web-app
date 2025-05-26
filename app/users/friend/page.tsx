async function postRequestHandler() {
  const res = await fetch("http://localhost:3000/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Sasha" }),
  });
  const data = await res.json();
  console.log(data);
  return data;
}

const Friend = async () => {
  const { message } = await postRequestHandler();
  return (
    <>
      <h1>{message}</h1>
    </>
  );
};
export default Friend;
