import Link from "next/link";
import { useEffect, useState } from "react"
import useSWR from "swr";
import { signIn, signOut, useSession } from "next-auth/react";  // using this we can find whether someone is logged in or not ?
// all about client side rendering and routing

export default function Home() {

  // nextjs authentication
  const session = useSession();
  console.log(session);


  // instead of this we can use swr for client side fetching swr is more optimal as it use caching
  // const [users,setUser] = useState([]);

  // const fetchData = async() =>{
  //   const resp = await fetch('https://dummyjson.com/users');
  //   const data = await resp.json();

  //   setUser(data);
  // }
  // useEffect(() => {
    
  //   fetchData();
  
  // }, [])

  // swr method -->
  const fetcher = (...args)=>fetch(...args).then((res)=>res.json());
  const {data, error} = useSWR('https://dummyjson.com/users',fetcher);
  console.log(data);
  
  if(error){
    return <h1>Error eccoured</h1>
  }
  if(!data){
    return <h1>Loading...</h1>
  }
  if(session.data === null){
    return (<button onClick={signIn}>SignIn</button>);
  }
  return (
    <>
    {/* <h1 className="text-blue-400">This is home page </h1>
    {users && users.users && users.users.map((user)=>
      <Link key={user.id} href={`/user/${user.id}`} className="flex flex-col"><li>{user.firstName}{user.lastName}</li></Link>
    )} */}

    {/* use swr */}

    <h1>This is home page</h1>
    <h1>Hello {session?.data?.user?.name}</h1>
    <button onClick={signOut}>Sign Out</button>
    {
      data.users.map((user)=>
      <Link key={user.id} href={`/user/${user.id}`} className="flex flex-col"><li>{user.firstName}{user.lastName}</li></Link>)
    }
    </>
    
  )
}