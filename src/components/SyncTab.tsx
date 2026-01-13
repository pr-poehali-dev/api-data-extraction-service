import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const mockSyncStatus = [
  { account: 'WB-1', status: 'success', lastSync: '10:45', orders: 23, success: 100 },
  { account: 'WB-2', status: 'success', lastSync: '10:45', orders: 19, success: 100 },
  { account: 'Ozon-1', status: 'warning', lastSync: '10:42', orders: 18, success: 94 },
  { account: 'Ozon-2', status: 'success', lastSync: '10:45', orders: 15, success: 100 },
  { account: 'Yandex Market', status: 'success', lastSync: '10:44', orders: 12, success: 100 },
];

export default function SyncTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Статус синхронизации</CardTitle>
              <CardDescription>Подключения к API маркетплейсов</CardDescription>
            </div>
            <Button size="sm">
              <Icon name="RefreshCw" size={16} className="mr-1.5" />
              Обновить всё
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Аккаунт</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Последняя синхронизация</TableHead>
                <TableHead className="text-right">Заказов загружено</TableHead>
                <TableHead className="text-right">Успешность</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSyncStatus.map((account) => (
                <TableRow key={account.account}>
                  <TableCell className="font-medium">{account.account}</TableCell>
                  <TableCell>
                    {account.status === 'success' && (
                      <Badge variant="outline" className="gap-1.5 bg-green-50 text-green-700 border-green-200">
                        <Icon name="CheckCircle2" size={12} />
                        Успешно
                      </Badge>
                    )}
                    {account.status === 'warning' && (
                      <Badge variant="outline" className="gap-1.5 bg-yellow-50 text-yellow-700 border-yellow-200">
                        <Icon name="AlertCircle" size={12} />
                        Внимание
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">Сегодня, {account.lastSync}</TableCell>
                  <TableCell className="text-right">{account.orders}</TableCell>
                  <TableCell className="text-right font-semibold">{account.success}%</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost">
                      <Icon name="Play" size={14} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Расписание синхронизации</CardTitle>
          <CardDescription>Настройка автоматического обновления данных</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Время первой синхронизации</label>
              <Input type="time" defaultValue="10:00" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Интервал проверки</label>
              <Select defaultValue="1h">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30m">Каждые 30 минут</SelectItem>
                  <SelectItem value="1h">Каждый час</SelectItem>
                  <SelectItem value="2h">Каждые 2 часа</SelectItem>
                  <SelectItem value="6h">Каждые 6 часов</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <Icon name="Clock" size={20} className="text-primary" />
              <div>
                <p className="text-sm font-medium">Проверка невыкупленных заказов</p>
                <p className="text-xs text-muted-foreground">Через 24 часа после загрузки</p>
              </div>
            </div>
            <Badge>Включено</Badge>
          </div>
          <Button className="w-full">
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить настройки
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
