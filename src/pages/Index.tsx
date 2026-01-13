import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import AppHeader from '@/components/AppHeader';
import DashboardTab from '@/components/DashboardTab';
import SyncTab from '@/components/SyncTab';
import ConfigTab from '@/components/ConfigTab';

export default function Index() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container mx-auto px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="sync" className="gap-2">
              <Icon name="RefreshCw" size={16} />
              Синхронизация
            </TabsTrigger>
            <TabsTrigger value="config" className="gap-2">
              <Icon name="Settings2" size={16} />
              Конфигурация
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <DashboardTab />
          </TabsContent>

          <TabsContent value="sync">
            <SyncTab />
          </TabsContent>

          <TabsContent value="config">
            <ConfigTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
