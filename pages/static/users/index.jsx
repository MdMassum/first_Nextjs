import Link from "next/link";

const UserPage = (props) =>{
    return (
        <div>
            <h1>This is Static Site Generation page (ssg example) !!</h1>

            {
            props.data.users.map((user)=>
            <Link key={user.id} href={`/static/users/${user.id}`} className="flex flex-col"><li>{user.firstName}{user.lastName}</li></Link>)
            }
        </div>
    )
}
export const getStaticProps = async() =>{
    const data = await(await fetch("https://dummyjson.com/users")).json(); // this data will be fetch during build time and will be saved for showing
    return {
        props:{
            data,  
        }
    }
}
export default UserPage