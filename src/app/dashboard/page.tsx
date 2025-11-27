"use client";

import { useState } from 'react'
import NavMenu from './navmenu.tsx'
import FileTree from './filetreeSidebar.tsx'
import Explorer from './explorer.tsx'

export default function Dashoard(){
  const [query, setQuery] = useState("")
  const [reloadFileTree, setReloadFileTree] = useState(false)
  return(
  <div className="flex flex-col dark bg-background text-foreground h-lvh w-lvw">
      <NavMenu setQuery = {setQuery} query = {query}></NavMenu>
      <div className="main flex h-[91%] w-lvw">
        <FileTree></FileTree>
        <Explorer setQuery = {setQuery} query = {query}></Explorer>
      </div>
  </div>
 )
}
