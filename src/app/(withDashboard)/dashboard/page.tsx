import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <Image
            src={session?.user?.image}
            width={170}
            height={170}
            alt="user-img"
            className="mx-auto border rounded-full my-5"
          />
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            User Email: {session?.user?.email}
          </h1>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
