import { useRouter } from "next/router"

export default function Setting() {

    const router = useRouter();
    console.log(router);
    
    const {query} = useRouter();

    return (
      <h1>this is dynamic setting page for {query.user} </h1>
    )
  }