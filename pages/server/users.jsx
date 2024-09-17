import Link from "next/link";

const UserPage = (props) =>{
    console.log(props.data.users);
    return (
        <>
        <h1>User Page (This is Server Side Rendering)</h1>
    {
      props.data.users.map((user)=>
      <Link key={user.id} href={`/user/${user.id}`} className="flex flex-col"><li>{user.firstName}{user.lastName}</li></Link>)
    }
        </>
    )
}

// for server side rendering -->
export const getServerSideProps = async()=>{
    console.log("Task running on server")
    const data = await(await fetch("https://dummyjson.com/users")).json(); // this data will fetch on server
    return {
        props:{
            data,  
        }
    }
}
export default UserPage