"use client";

import Logout from '../logoutAction.tsx'
import Link from 'next/link'


export default function LogoutButton(){
  return (
  <div>
    <button onClick={Logout} className="bg-red-200 ml-4">Logout</button>
    <Link href="../dashboard/" className="bg-red-200 ml-4">Go to Files</Link>
  </div>
)}
