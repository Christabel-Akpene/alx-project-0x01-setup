import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UserData} from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allPosts, setAllPosts] = useState<UserData[]>(posts);

    const handleAddPost = (newUser: UserProps) => {
        // setAllPosts([...allPosts, {...newPost, id: posts.length + 1}])
        setAllPosts(prev => [...prev, {...newUser, id: prev.length + 1}]);
    }



  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
        <h1 className=" text-2xl font-semibold">Post Content</h1>
        <button onClick={()=> setIsModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {
            allPosts?.map(({ name, username, email, phone, website, address, company, id }: UserProps) => (
              <UserCard id={id} name={name} username={username} email={email} phone={phone} website={website} address={address} company={company} key={id} />
            ))
          }
        </div>
      </main>

      {
        isModalOpen && (<UserModal onClose={()=> setIsModalOpen(false)} onSubmit={handleAddPost}/>)
      }
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;