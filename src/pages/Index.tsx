import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Mock данные для демонстрации
  const stats = {
    videos: 2847,
    views: 1250000,
    likes: 89500,
    users: 15420
  };

  const recentVideos = [
    { id: 1, title: "Урок по React Hooks", author: "Алексей Петров", views: 15420, likes: 892, status: "published", category: "Обучение" },
    { id: 2, title: "Топ 10 лайфхаков для разработчиков", author: "Мария Сидорова", views: 8750, likes: 654, status: "review", category: "Лайфхаки" },
    { id: 3, title: "Создание API с Node.js", author: "Иван Иванов", views: 12300, likes: 743, status: "published", category: "Backend" },
    { id: 4, title: "Дизайн системы для стартапа", author: "Елена Козлова", views: 6890, likes: 423, status: "draft", category: "Дизайн" }
  ];

  const categories = [
    { name: "Обучение", count: 847, color: "bg-purple-500" },
    { name: "Лайфхаки", count: 523, color: "bg-success" },
    { name: "Backend", count: 412, color: "bg-info" },
    { name: "Дизайн", count: 298, color: "bg-warning" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published": return <Badge className="bg-success text-white">Опубликовано</Badge>;
      case "review": return <Badge className="bg-warning text-white">На модерации</Badge>;
      case "draft": return <Badge variant="outline">Черновик</Badge>;
      default: return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Навигационная панель */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                <Icon name="Play" size={18} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Video CMS Admin
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600">
              <Icon name="Upload" size={16} className="mr-2" />
              Загрузить видео
            </Button>
          </div>
        </div>
      </header>

      {/* Боковая навигация */}
      <div className="flex">
        <nav className="w-64 bg-white border-r border-gray-200 min-h-screen pt-6">
          <div className="px-4 space-y-2">
            {[
              { name: "Dashboard", icon: "LayoutDashboard", active: true },
              { name: "Видео", icon: "Video", count: stats.videos },
              { name: "Категории", icon: "Folder", count: 24 },
              { name: "Плейлисты", icon: "List", count: 156 },
              { name: "Комментарии", icon: "MessageSquare", count: 1205 },
              { name: "Пользователи", icon: "Users", count: stats.users },
              { name: "Аналитика", icon: "BarChart3" },
              { name: "Настройки", icon: "Settings" }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active 
                    ? "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border border-purple-200" 
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.count && (
                  <Badge variant="secondary" className="text-xs">
                    {item.count.toLocaleString()}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Основной контент */}
        <main className="flex-1 p-6 space-y-6">
          {/* Статистические карточки */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Всего видео", value: stats.videos, icon: "Video", color: "from-purple-500 to-purple-600", change: "+12%" },
              { title: "Просмотры", value: stats.views, icon: "Eye", color: "from-blue-500 to-blue-600", change: "+8%" },
              { title: "Лайки", value: stats.likes, icon: "Heart", color: "from-pink-500 to-pink-600", change: "+15%" },
              { title: "Пользователи", value: stats.users, icon: "Users", color: "from-green-500 to-green-600", change: "+3%" }
            ].map((stat, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                      <Icon name={stat.icon as any} size={16} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
                  <div className="text-sm text-green-600 font-medium">{stat.change} от прошлого месяца</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* График и активность */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Симуляция графика */}
            <Card className="lg:col-span-2 animate-slide-up">
              <CardHeader>
                <CardTitle>Аналитика просмотров</CardTitle>
                <CardDescription>Статистика за последние 30 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg flex items-end justify-between p-4 space-x-2">
                  {[40, 70, 45, 80, 65, 90, 75, 85, 60, 95, 70, 85, 55, 75].map((height, i) => (
                    <div 
                      key={i}
                      className="bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-sm flex-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                      style={{height: `${height}%`}}
                      title={`День ${i + 1}: ${height}K просмотров`}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>1 дек</span>
                  <span>15 дек</span>
                  <span>30 дек</span>
                </div>
              </CardContent>
            </Card>

            {/* Активность пользователей */}
            <Card className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { user: "Алексей П.", action: "загрузил видео", time: "2 мин назад", avatar: "👨‍💻" },
                  { user: "Мария С.", action: "добавила комментарий", time: "5 мин назад", avatar: "👩‍🎨" },
                  { user: "Иван И.", action: "создал плейлист", time: "12 мин назад", avatar: "👨‍💼" },
                  { user: "Елена К.", action: "изменила категорию", time: "25 мин назад", avatar: "👩‍🔬" },
                  { user: "Дмитрий Л.", action: "опубликовал видео", time: "1 ч назад", avatar: "👨‍🎓" }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">{activity.avatar}</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{activity.user}</div>
                      <div className="text-xs text-gray-600">{activity.action}</div>
                    </div>
                    <div className="text-xs text-gray-400">{activity.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Категории */}
          <Card className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <CardTitle>Популярные категории</CardTitle>
              <CardDescription>Распределение видео по категориям</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category, i) => (
                  <div key={i} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-gray-600">{category.count} видео</div>
                      </div>
                    </div>
                    <Progress value={(category.count / stats.videos) * 100} className="mt-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Таблица последних видео */}
          <Card className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Последние видео</CardTitle>
                  <CardDescription>Недавно загруженные и отредактированные видео</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтры
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-purple-500">
                    Все видео
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название</TableHead>
                    <TableHead>Автор</TableHead>
                    <TableHead>Категория</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Просмотры</TableHead>
                    <TableHead>Лайки</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentVideos.map((video) => (
                    <TableRow key={video.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="font-medium">{video.title}</TableCell>
                      <TableCell>{video.author}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{video.category}</Badge>
                      </TableCell>
                      <TableCell>{getStatusBadge(video.status)}</TableCell>
                      <TableCell>{video.views.toLocaleString()}</TableCell>
                      <TableCell>{video.likes.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">
                            <Icon name="Edit" size={14} />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Icon name="Eye" size={14} />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
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

          {/* Управление плейлистами */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="animate-slide-up" style={{animationDelay: '0.5s'}}>
              <CardHeader>
                <CardTitle>Управление плейлистами</CardTitle>
                <CardDescription>Создавайте и редактируйте плейлисты</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Курс по React", videos: 24, visibility: "public" },
                  { name: "JavaScript для начинающих", videos: 18, visibility: "public" },
                  { name: "Продвинутый CSS", videos: 12, visibility: "unlisted" }
                ].map((playlist, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-center space-x-3">
                      <Icon name="List" size={20} className="text-purple-600" />
                      <div>
                        <div className="font-medium">{playlist.name}</div>
                        <div className="text-sm text-gray-600">{playlist.videos} видео</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={playlist.visibility === "public" ? "default" : "outline"}>
                        {playlist.visibility}
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать плейлист
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{animationDelay: '0.6s'}}>
              <CardHeader>
                <CardTitle>Модерация комментариев</CardTitle>
                <CardDescription>Комментарии, ожидающие модерации</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { user: "Андрей М.", comment: "Отличный урок! Когда будет продолжение?", video: "Урок по React Hooks" },
                  { user: "Светлана К.", comment: "Не совсем понятно объяснили про хуки...", video: "JavaScript основы" },
                  { user: "Максим П.", comment: "Супер контент, подписался!", video: "CSS Grid Layout" }
                ].map((comment, i) => (
                  <div key={i} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{comment.user}</span>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                          <Icon name="Check" size={14} />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                          <Icon name="X" size={14} />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{comment.comment}</p>
                    <div className="text-xs text-gray-500">К видео: {comment.video}</div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Все комментарии
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;