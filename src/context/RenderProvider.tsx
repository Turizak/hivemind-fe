import RenderContext from "../hooks/RenderContext";

type RenderProviderProps = {
  children: React.ReactNode;
  onTrigger: () => void;
  delay: number;
}

export const RenderProvider: React.FC<RenderProviderProps> = ({ children, onTrigger, delay}) => {
  return (
    <RenderContext.Provider value={{onTrigger, delay}}>
      {children}
    </RenderContext.Provider>
  );
};

