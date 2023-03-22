
"use client"
import { client } from "lib/client"
import axios from "axios"
import { useRouter } from "next/router"
import { Fruits } from "components"


export default function Home({allfruits}) {
 
  return (
    <div >
    <Fruits products={allfruits}/>
    </div>
  )
  }
export async function getStaticProps(){

const allfruits=await client.fetch(`*[_type == "fruits"]`)
return{
  props:{
    allfruits
  }
}
}