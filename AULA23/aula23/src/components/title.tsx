interface TitleProps {
    title: string;
  }
  

export function Title(props: TitleProps){
    return(
        <h1 className="text-6xl">{props.title}</h1>
    )
}