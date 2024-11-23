import { ReactNode } from "react"

interface SubtitleProps {
   children: ReactNode
  }
  


export function Subtitle(props: SubtitleProps){
    return(
        <h2 className="text-3xlr">{props.children}</h2>
    )
}