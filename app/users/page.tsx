import Link from "next/link";

const Users = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  console.log(users); // Log the fetched data to the console`

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>
            {user.name}
            <Link href={`/users/${user.id}`}>
              ||<b>View Profile</b>{" "}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
