
const UserPage = (props) =>{

    return (
        <>
        <h1>Welcome {props.data.firstName}</h1>
        <h3>{props.data.email}</h3>
        </>
    )
}

// since we are making static page for dynamic paths we need to give possible paths->
export const getStaticPaths = async()=>{

    const data = await(await fetch(`https://dummyjson.com/users`)).json();

    const allUserid = data.users.map((user)=>user.id);
    // console.log(allUserid);

    return {
        paths: allUserid.map((userId)=>({params:{id:`${userId}`}})),
        fallback:false
    }
}
// for server side rendering -->
export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const data = await(await fetch(`https://dummyjson.com/users/${id}`)).json(); // this data will be fetch during build time and will be saved for showing static pages, this pages dont need even internet to load bcoz its saved on build time
    return {
        props:{
            data,  
        }
    }
}
export default UserPage