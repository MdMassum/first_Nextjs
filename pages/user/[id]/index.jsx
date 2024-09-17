import { useRouter } from "next/router"
import { useEffect, useState} from "react"


export default function user() {

    const router = useRouter();
    const id = router.query.id;
    console.log(id);
    const [user, setUser] = useState({});
    console.log(user)

    const fetchUser = async()=>{
        const resp = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await resp.json();
        setUser(data);
    }
    useEffect(() => {
      fetchUser();
    }, [])
    
    return (
      <div>
        <h1>hello {user.firstName}</h1>
        <h2>{user.email}</h2>
      </div>
      
    )
  }