import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: "1032615375937-l88oparn9s6ifb6lke3gsqvcj9mhdelr.apps.googleusercontent.com",
          clientSecret: "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"
        })
      ], 
      jwt: {
        encryption: true
      },
      secret: process.env.secret,
      
      callbacks: {
        async jwt(token:any, account:any) {
          if (account ?.accessToken) {
            token.accessToken = account.accessToken
          }
          return token;
        },
        redirect: async (url:any, _baseUrl : any)=>{
          if (url === '/user')  {
            return Promise.resolve('/')
          }
          return  Promise.resolve('/')
        }
    }
    });