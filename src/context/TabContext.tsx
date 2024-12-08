import React, { createContext, useContext, useState } from 'react';

interface Tab {
  id: string;
  path: string;
  label: string;
  isActive: boolean;
}

interface TabContextType {
  tabs: Tab[];
  activeTab: string | null;
  addTab: (path: string) => void;
  removeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const addTab = (path: string) => {
    const existingTab = tabs.find(tab => tab.path === path);
    if (existingTab) {
      setActiveTab(existingTab.id);
      return;
    }

    const newTab: Tab = {
      id: `tab-${Date.now()}`,
      path,
      label: path.split('/').pop() || path,
      isActive: true,
    };

    setTabs(prevTabs => 
      prevTabs.map(tab => ({ ...tab, isActive: false })).concat(newTab)
    );
    setActiveTab(newTab.id);
  };

  const removeTab = (id: string) => {
    setTabs(prevTabs => {
      const newTabs = prevTabs.filter(tab => tab.id !== id);
      if (activeTab === id && newTabs.length > 0) {
        setActiveTab(newTabs[newTabs.length - 1].id);
      }
      return newTabs;
    });
  };

  const handleSetActiveTab = (id: string) => {
    setTabs(prevTabs =>
      prevTabs.map(tab => ({
        ...tab,
        isActive: tab.id === id
      }))
    );
    setActiveTab(id);
  };

  return (
    <TabContext.Provider 
      value={{
        tabs,
        activeTab,
        addTab,
        removeTab,
        setActiveTab: handleSetActiveTab
      }}
    >
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
} 