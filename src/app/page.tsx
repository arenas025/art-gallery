'use client'

import { Header } from '@/components/Header';
import { MainCarrousel } from '@/components/MainCarrousel';

export default function Home() {

  // //@ts-ignore
  // window.navigation.addEventListener("navigate", (event) => {
  //   const toURL = event.destination.url.split("/");

  //   // if(location.origin !== toURL[2]) return

  //   if(toURL[3] === "") return 
    
  //   event.intercept({
  //     async handler() {
  //       const response = await fetch(toURL[3]);
  //       const text = await response.text();
  //       const [, data] = text.match(/<body[^>]*>(.*?)<\/body>/i)!;

  //       //@ts-ignore
  //       document.startViewTransition(() => {
  //         document.body.innerHTML = data;
  //         document.documentElement.scrollTop = 0;
  //       });
  //     },
  //   });
    
    

  //   console.log(event);
  // });


  return (
    <main>
    <Header/>
    <MainCarrousel/>
    </main>
  )
}
