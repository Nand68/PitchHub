import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://pitch-hub-server.vercel.app",
    issuerBaseURL: "https://dev-sc8lywc7rb0kor6k.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck