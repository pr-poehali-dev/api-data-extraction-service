import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function AppHeader() {
  return (
    <header className="border-b bg-card sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="BarChart3" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Marketplace Sync</h1>
              <p className="text-xs text-muted-foreground">Панель управления синхронизацией</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Все системы работают
            </Badge>
            <Button size="sm" variant="outline">
              <Icon name="Settings" size={16} className="mr-1.5" />
              Настройки
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
