import { useState } from "react"

export default function useLocalStorage(key , value = ""){
    const [value , setvalue] = useState()


    return [value]
}