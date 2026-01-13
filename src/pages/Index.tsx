import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const mockOrdersData = [
  { date: '03.01', WB: 48, Ozon: 32, Yandex: 15, total: 95 },
  { date: '04.01', WB: 52, Ozon: 28, Yandex: 18, total: 98 },
  { date: '05.01', WB: 45, Ozon: 35, Yandex: 12, total: 92 },
  { date: '06.01', WB: 58, Ozon: 42, Yandex: 22, total: 122 },
  { date: '07.01', WB: 61, Ozon: 38, Yandex: 19, total: 118 },
  { date: '08.01', WB: 55, Ozon: 45, Yandex: 25, total: 125 },
  { date: '09.01', WB: 63, Ozon: 41, Yandex: 21, total: 125 },
];

const mockMarketplaceDistribution = [
  { name: 'WB-1', value: 142, color: '#0EA5E9' },
  { name: 'WB-2', value: 140, color: '#06B6D4' },
  { name: 'Ozon-1', value: 128, color: '#8B5CF6' },
  { name: 'Ozon-2', value: 115, color: '#A78BFA' },
  { name: 'Yandex', value: 87, color: '#EC4899' },
];

const mockTopProducts = [
  { sku: 'SKU-001', name: 'Товар А', orders: 245, trend: 12 },
  { sku: 'SKU-002', name: 'Товар Б', orders: 198, trend: -5 },
  { sku: 'SKU-003', name: 'Товар В', orders: 176, trend: 8 },
  { sku: 'SKU-004', name: 'Товар Г', orders: 152, trend: 15 },
  { sku: 'SKU-005', name: 'Товар Д', orders: 134, trend: -2 },
];

const mockSyncStatus = [
  { account: 'WB-1', status: 'success', lastSync: '10:45', orders: 23, success: 100 },
  { account: 'WB-2', status: 'success', lastSync: '10:45', orders: 19, success: 100 },
  { account: 'Ozon-1', status: 'warning', lastSync: '10:42', orders: 18, success: 94 },
  { account: 'Ozon-2', status: 'success', lastSync: '10:45', orders: 15, success: 100 },
  { account: 'Yandex Market', status: 'success', lastSync: '10:44', orders: 12, success: 100 },
];

const mockProducts = [
  { sku: 'SKU-001', name: 'Товар А', wb1: true, wb2: true, ozon1: true, ozon2: false, yandex: true },
  { sku: 'SKU-002', name: 'Товар Б', wb1: true, wb2: true, ozon1: true, ozon2: true, yandex: false },
  { sku: 'SKU-003', name: 'Товар В', wb1: true, wb2: false, ozon1: true, ozon2: true, yandex: true },
  { sku: 'SKU-004', name: 'Товар Г', wb1: false, wb2: true, ozon1: false, ozon2: true, yandex: true },
  { sku: 'SKU-005', name: 'Товар Д', wb1: true, wb2: true, ozon1: true, ozon2: true, yandex: true },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-background">
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

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Заказов сегодня</CardDescription>
                  <CardTitle className="text-3xl font-bold">125</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <Icon name="TrendingUp" size={14} />
                    <span>+8.2% от вчера</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Заказов за неделю</CardDescription>
                  <CardTitle className="text-3xl font-bold">775</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <Icon name="TrendingUp" size={14} />
                    <span>+12.4% от пред. недели</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Успешных синхронизаций</CardDescription>
                  <CardTitle className="text-3xl font-bold">98.8%</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="CheckCircle2" size={14} />
                    <span>87 из 88</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Активных артикулов</CardDescription>
                  <CardTitle className="text-3xl font-bold">35</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Icon name="Package" size={14} />
                    <span>На 5 маркетплейсах</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Динамика заказов</CardTitle>
                  <CardDescription>Заказы по дням за последнюю неделю</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={mockOrdersData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="WB" stroke="#0EA5E9" strokeWidth={2} />
                      <Line type="monotone" dataKey="Ozon" stroke="#8B5CF6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Yandex" stroke="#EC4899" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Распределение по аккаунтам</CardTitle>
                  <CardDescription>Заказы за последние 7 дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={mockMarketplaceDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={90}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {mockMarketplaceDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Топ товаров по заказам</CardTitle>
                <CardDescription>Самые популярные артикулы за последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Артикул</TableHead>
                      <TableHead>Название</TableHead>
                      <TableHead className="text-right">Заказов</TableHead>
                      <TableHead className="text-right">Тренд</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockTopProducts.map((product) => (
                      <TableRow key={product.sku}>
                        <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell className="text-right font-semibold">{product.orders}</TableCell>
                        <TableCell className="text-right">
                          <span className={product.trend > 0 ? 'text-green-600' : 'text-red-600'}>
                            {product.trend > 0 ? '+' : ''}{product.trend}%
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Google Sheets</CardTitle>
                    <CardDescription>Прямой доступ к таблице учёта</CardDescription>
                  </div>
                  <Button size="sm">
                    <Icon name="ExternalLink" size={16} className="mr-1.5" />
                    Открыть в Google
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Icon name="FileSpreadsheet" size={32} className="text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">Учёт заказов маркетплейсов 2026</p>
                    <p className="text-sm text-muted-foreground">Последнее обновление: сегодня в 10:45</p>
                  </div>
                  <Badge variant="outline">Синхронизировано</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sync" className="space-y-6">
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
          </TabsContent>

          <TabsContent value="config" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Управление артикулами</CardTitle>
                    <CardDescription>Добавление и настройка товаров для синхронизации</CardDescription>
                  </div>
                  <Button size="sm">
                    <Icon name="Plus" size={16} className="mr-1.5" />
                    Добавить артикул
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Артикул</TableHead>
                      <TableHead>Название</TableHead>
                      <TableHead className="text-center">WB-1</TableHead>
                      <TableHead className="text-center">WB-2</TableHead>
                      <TableHead className="text-center">Ozon-1</TableHead>
                      <TableHead className="text-center">Ozon-2</TableHead>
                      <TableHead className="text-center">Yandex</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockProducts.map((product) => (
                      <TableRow key={product.sku}>
                        <TableCell className="font-mono text-sm font-medium">{product.sku}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell className="text-center">
                          {product.wb1 ? (
                            <Icon name="CheckCircle2" size={16} className="inline text-green-600" />
                          ) : (
                            <Icon name="Circle" size={16} className="inline text-muted-foreground" />
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {product.wb2 ? (
                            <Icon name="CheckCircle2" size={16} className="inline text-green-600" />
                          ) : (
                            <Icon name="Circle" size={16} className="inline text-muted-foreground" />
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {product.ozon1 ? (
                            <Icon name="CheckCircle2" size={16} className="inline text-green-600" />
                          ) : (
                            <Icon name="Circle" size={16} className="inline text-muted-foreground" />
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {product.ozon2 ? (
                            <Icon name="CheckCircle2" size={16} className="inline text-green-600" />
                          ) : (
                            <Icon name="Circle" size={16} className="inline text-muted-foreground" />
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          {product.yandex ? (
                            <Icon name="CheckCircle2" size={16} className="inline text-green-600" />
                          ) : (
                            <Icon name="Circle" size={16} className="inline text-muted-foreground" />
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button size="sm" variant="ghost">
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">API ключи маркетплейсов</CardTitle>
                <CardDescription>Настройка подключений к личным кабинетам</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {['WB-1', 'WB-2', 'Ozon-1', 'Ozon-2', 'Yandex Market'].map((account) => (
                  <div key={account} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="Key" size={18} className="text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{account}</p>
                        <p className="text-xs text-muted-foreground">API ключ настроен</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Settings" size={14} className="mr-1.5" />
                      Изменить
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Настройки Google Sheets</CardTitle>
                <CardDescription>Подключение к таблице для записи данных</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">ID таблицы Google Sheets</label>
                  <Input placeholder="1a2b3c4d5e6f7g8h9i0j..." defaultValue="1a2b3c4d5e6f7g8h9i0j..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Название листа</label>
                  <Input placeholder="Лист1" defaultValue="Учёт заказов" />
                </div>
                <Button className="w-full">
                  <Icon name="Link" size={16} className="mr-2" />
                  Проверить подключение
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
