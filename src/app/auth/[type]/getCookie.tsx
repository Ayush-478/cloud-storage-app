
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'


export default async function getCookie(){ 
  const cookieStore = await cookies()
  const token = await cookieStore.get('bio-db-auth-jwt-token')?.value
  if(token){
    try{
      return token
    }catch(err){throw err}
  }
}

