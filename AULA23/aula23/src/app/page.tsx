import { Button } from "@/components/button";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";



export default async function Home() {
  const name = 'Julia Amaral'

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      {/* title.tsx == Title() */}
   
      <Title title={name}/>
       {/* subtitle.tsx == Subtitle() */}
      <Subtitle>FULL STACK DEVELOPER</Subtitle>
    
      <div className="flex flex-col mt-6 gap-6">
     <Button title="ENTRAR"/>
      </div>
    </div>
  );
}
