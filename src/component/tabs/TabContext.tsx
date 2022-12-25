import { createContext, useState, useEffect, useMemo, useContext } from 'react';

interface ContextProps {
  idPrefix?: string;
  value: string;
}

const Context = createContext<ContextProps | null>(null);
Context.displayName = 'TabContext';

function useUniquePrefix() {
  const [id, setId] = useState<string>();

  useEffect(() => {
    setId(`omizha-TabContext-${Math.round(Math.random() * 1e5)}`);
  }, []);

  return id;
}

interface Props {
  value: string;
  children: React.ReactNode;
}

const TabContext = ({ value, children }: Props) => {
  const idPrefix = useUniquePrefix();

  const context = useMemo(() => {
    return { idPrefix, value };
  }, [idPrefix, value]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useTabContext = () => {
  return useContext(Context);
};

export const getTabId = (context: ContextProps, value: ContextProps['value']) => {
  const { idPrefix } = context;
  if (idPrefix === undefined) {
    return undefined;
  }

  return `${idPrefix}-Tab-${value}`;
};

export const getPanelId = (context: ContextProps, value: ContextProps['value']) => {
  const { idPrefix } = context;
  if (idPrefix === undefined) {
    return undefined;
  }

  return `${idPrefix}-Panel-${value}`;
};

export default TabContext;
