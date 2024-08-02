import client from "db";

async function getUserDetails() {
  await new Promise(resolve => setTimeout(resolve, 1000));
    const user = await client.user.findFirst({});
    return ({ name: user?.username, password: user?.password })
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userData?.name}
          </div>
          {userData?.password}
        </div>
      </div>
    </div>
  );
}
