import { createContext, useContext, useEffect } from "react";

type RenderContextType = {
  onTrigger: () => void;
  delay: number
}

const RenderContext = createContext<RenderContextType>({onTrigger: () => {}, delay: 1000 });

export const useTriggerFunctionWithDelay = () => {
  const { onTrigger, delay } = useContext(RenderContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      onTrigger();
    }, delay);

    return () => clearTimeout(timer);
  }, [onTrigger, delay]);
};

export default RenderContext;
