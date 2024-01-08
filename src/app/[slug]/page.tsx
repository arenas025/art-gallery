import { Layout } from "@/components/Layout";
import data from "../../../data.json";

const Page = ({params}:any) => {

  const {slug} = params
  
  const information = data.find((item) => item.name.toLowerCase().replaceAll(" ", "-") === slug);

  return (
    <Layout
      description={information?.description!}
      author={information?.artist.name!}
      imageArt={ `/${information?.images.hero.small!}`}
      imageAuthor={`/${information?.artist.image!}`}
      name={information?.name!}
      year={information?.year!}
      key={information?.id!}
      id={information?.id!}
      source={information?.source!}
    />
  );
};

export default Page;
