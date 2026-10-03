import MainNews from "@/Components/MainNews";
import MostReads from "@/Components/MostReads";
import OtherSections from "@/Components/OtherSections";
import { ISections } from "@/type";

const fetchSections = async (): Promise<ISections> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  return data;
}

export default async function Home() {

  const data = await fetchSections();
  const sections = data.data;
  const mainSection = sections[0];


  return (
    <div>

      <div className="grid grid-cols-3 container mx-auto mt-4 gap-5">

        <div className="col-span-2">
          <MainNews section={mainSection}/>
          <OtherSections sections={sections.slice(1)}/>
        </div>

        <div className="col-span-1">
          <MostReads />
        </div>

      </div>

    </div>    
  );
}
