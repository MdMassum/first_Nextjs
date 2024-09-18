import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers : [
        GithubProvider({   // get credentials from github
            clientId:"",
            clientSecret:""
        })
    ]
}
export default NextAuth(authOptions)