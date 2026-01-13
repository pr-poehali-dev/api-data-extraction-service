import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const mockProducts = [
  { sku: 'SKU-001', name: 'Товар А', wb1: true, wb2: true, ozon1: true, ozon2: false, yandex: true },
  { sku: 'SKU-002', name: 'Товар Б', wb1: true, wb2: true, ozon1: true, ozon2: true, yandex: false },
  { sku: 'SKU-003', name: 'Товар В', wb1: true, wb2: false, ozon1: true, ozon2: true, yandex: true },
  { sku: 'SKU-004', name: 'Товар Г', wb1: false, wb2: true, ozon1: false, ozon2: true, yandex: true },
  { sku: 'SKU-005', name: 'Товар Д', wb1: true, wb2: true, ozon1: true, ozon2: true, yandex: true },
];

export default function ConfigTab() {
  return (
    <div className="space-y-6">
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
    </div>
  );
}
