import NextAuth, {Account, Session} from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify"
import {JWT} from "next-auth/jwt";

export default NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID || "",
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
            authorization: {params: {scope: "user-read-currently-playing"}}
        }),

    ],
    callbacks: {
        /**
         * Injects the Access Token in NextAuth JWT.
         **/

        async jwt({token, account}: { token: JWT; account?: Account | null }) {
            if (account) {
                const {access_token} = account;
                token.access_token = access_token

            }
            return token
        },

        async session({session, token}) {

            /**
             * Injects the Token in the Session Object.
             * Any is being used here to extend the Session Object without having to rewrite it.
             **/

            let o = session as any;
            o.user.token = token;
            return o as Session;
        }
    }
})