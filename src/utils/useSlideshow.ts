import { Dispatch, SetStateAction, useEffect, useState } from "react";


interface useSlideshow {
  setStartSlideShow?: Dispatch<SetStateAction<boolean>>;
  data:any[]
} 

const useSlideshow = ({setStartSlideShow,data}:useSlideshow) => {

  const [isOnView, setIsOnView] = useState<string>("");


  const slideshowStart = () => {
    const area = document.querySelector("#scrollArea");

    const currentScroll = window.scrollY;

    const height = screen.height;

    // Calcula la posición hacia abajo (puedes ajustar la cantidad según sea necesario)
    const targetScroll = currentScroll + area!.scrollHeight;

    const duration = 20000;

    const startTime = performance.now();

    const linearProgress = (currentTime: number, duration: number) => {
      return Math.min(currentTime / duration, 1);
    };

    function animateScroll(time: number) {
      // Calcula el progreso de la animación
      let progress = linearProgress(time - startTime, duration);

      // Calcula la nueva posición de desplazamiento
      const newScroll =
        currentScroll + (targetScroll - currentScroll) * progress;

      // Realiza el desplazamiento
      window.scrollTo(0, newScroll);

      // Continúa la animación si no ha alcanzado la duración total
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
      setTimeout(() => {
        setStartSlideShow!(false);
      }, 10);
    }
    requestAnimationFrame(animateScroll);
  };

  const backToTop = () => {
    const area = document.querySelector("#scrollArea");

    if (!area) {
      return;
    }

    const currentScroll = window.scrollY;
    const targetScroll = 0;
    const duration = 1000;
    const startTime = performance.now();

    const linearProgress = (currentTime: number, duration: number) => {
      return Math.min(currentTime / duration, 1);
    };

    function animateScroll(time: number) {
      const progress = linearProgress(time - startTime, duration);
      const newScroll =
        currentScroll + (targetScroll - currentScroll) * progress;

      window.scrollTo(0, newScroll);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  const useAnimationMaximizeCover = () => {
    useEffect(() => {

      if(window.innerWidth<720){
        const observerOptions: IntersectionObserverInit = {
          rootMargin: "-50% 0% -50% 0% ",
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsOnView(entry.target.id);
            }
          });
        }, observerOptions);

        data.forEach((item) => {
          const target = document.querySelector(`#card-${item.id}`);
          observer.observe(target!);
        });
      return () => {
        observer.disconnect();
      };
      }
    }, []);
  };


  return { backToTop, slideshowStart, useAnimationMaximizeCover, isOnView };
}

export default useSlideshow


