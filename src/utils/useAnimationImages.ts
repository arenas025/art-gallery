import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSpring } from 'react-spring';

interface useAnimationImagesInterface {
  setShowImageActive: Dispatch<SetStateAction<boolean>>;
}

export const useAnimationImages = ({setShowImageActive}: useAnimationImagesInterface) => {
  const [springs, apiSprings] = useSpring(() => ({
    from: { scale: 0 },
  }));

  const [subContainer, subContainerApi] = useSpring(() => ({
    from: {
      scale: 0,
    },
  }));

  const [imageLoad, setImageLoad] = useState<boolean>(false);

  const closeComponent = () => {
    subContainerApi.start({
      from: {
        scale: 1,
      },
      to: {
        scale: 0,
      },
    });

    apiSprings.start({
      from: {
        scale: 1,
      },
      to: {
        scale: 0,
      },
    });
    setTimeout(() => {
      setShowImageActive(false);
    }, 800);
  };

  const onLoadImagine = () => {
    apiSprings.start({
      from: { scale: 0 },
      to: { scale: 1 },
    });
  };

  useEffect(() => {
    onLoadImagine();
  }, []);

  return {
    closeComponent,
    imageLoad,
    setImageLoad,
    subContainer,
    springs,
    subContainerApi,
  };
};
