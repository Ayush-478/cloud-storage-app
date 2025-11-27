
import { supabase } from '../../app/page.tsx'

export default async function getJWT(){
  const { data : { session } } = await supabase.auth.getSession()
  return session?.access_token;
}

