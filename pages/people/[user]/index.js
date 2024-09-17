import { useRouter } from "next/router"

// router.push saves all links in history
// router.replace dont saves history and is used redirect after correct login
// router.reload -> reloads the page
export default function Setting() {

    const router = useRouter();
    console.log(router);
    
    const {query} = useRouter();

    return (
      <>
      <h1>this is the page for {query.user} </h1>
      {/* <button onClick={(e)=>router.push(`/people/${query.user}/setting`)}>go to setting page</button> */}

      {/* another method */}  
      <button onClick={(e)=>
      router.push({
        pathname: "/people/[user]/setting",
        query:{user:query.user},
      })}
      >go to setting page</button>
      <button onClick={(e)=>router.push("/")}>Go to Home</button>
      <button onClick={(e)=>router.reload()}>reload</button>
      </>
    )
  }