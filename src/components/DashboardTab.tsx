import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

export default function DashboardTab() {
  return (
    <div className="space-y-6">
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
    </div>
  );
}
