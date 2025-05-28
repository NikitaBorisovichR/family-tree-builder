import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TreeCanvas from "@/components/TreeCanvas";
import TreeActions from "@/components/TreeActions";
import EmptyTreeState from "@/components/EmptyTreeState";
import PersonPreview from "@/components/PersonPreview";
import { usePersonsData } from "@/hooks/usePersonsData";
import { useTreeActions } from "@/hooks/useTreeActions";
import { Person } from "@/types/person";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PersonDetailsForm from "@/components/PersonDetailsForm";

const CreateTree = () => {
  const { toast } = useToast();
  const { persons, addPerson, updatePerson, removePerson } = usePersonsData();
  const {
    selectedPerson,
    setSelectedPerson,
    activeTab,
    setActiveTab,
    handleSelectPerson,
    handleAddPerson,
    handleViewCanvas,
  } = useTreeActions(addPerson);

  const handleUpdatePerson = (updatedPerson: Person) => {
    updatePerson(updatedPerson);
    setSelectedPerson(updatedPerson);

    toast({
      title: "Данные обновлены",
      description: "Информация о персоне успешно обновлена",
    });
  };

  const handleRemovePerson = (personId: string) => {
    removePerson(personId);
    setSelectedPerson(null);

    toast({
      title: "Персона удалена",
      description: "Персона успешно удалена из родословного древа",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Создание родословного древа
            </h1>
            <p className="text-lg text-gray-600">
              Добавьте членов семьи и создайте свое генеалогическое древо
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="add">Добавить персону</TabsTrigger>
              <TabsTrigger value="edit">Редактировать</TabsTrigger>
              <TabsTrigger value="canvas">Просмотр древа</TabsTrigger>
            </TabsList>

            <TabsContent value="add" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить нового члена семьи</CardTitle>
                  <CardDescription>
                    Заполните основную информацию о персоне
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PersonDetailsForm onSave={handleAddPerson} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="edit" className="space-y-6">
              {persons.length === 0 ? (
                <EmptyTreeState onAddPerson={() => setActiveTab("add")} />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Члены семьи</CardTitle>
                      <CardDescription>
                        Выберите персону для редактирования
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {persons.map((person) => (
                        <div key={person.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex-1">
                            <h3 className="font-medium">{person.name}</h3>
                            <p className="text-sm text-gray-500">
                              {person.birthYear && `Год рождения: ${person.birthYear}`}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleSelectPerson(person)}
                            >
                              Редактировать
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemovePerson(person.id)}
                            >
                              Удалить
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {selectedPerson && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Редактирование персоны</CardTitle>
                        <CardDescription>
                          Измените информацию о выбранной персоне
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <PersonDetailsForm
                          person={selectedPerson}
                          onSave={handleUpdatePerson}
                        />
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="canvas" className="space-y-6">
              {persons.length === 0 ? (
                <EmptyTreeState onAddPerson={() => setActiveTab("add")} />
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Родословное древо</CardTitle>
                    <CardDescription>
                      Визуализация вашего генеалогического древа
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TreeCanvas persons={persons} />
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}

          <TabsContent value="details">
            {selectedPerson ? (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <PersonDetailsForm
                    person={selectedPerson}
                    onUpdate={handleUpdatePerson}
                    onRemove={() => handleRemovePerson(selectedPerson.id)}
                    persons={persons}
                  />
                </div>
                <div>
                  <PersonPreview person={selectedPerson} />
                </div>
              </div>
            ) : (
              <div className="text-center p-8">
                <p>Выберите персону в древе для редактирования</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Настройки древа</CardTitle>
                <CardDescription>
                  Настройте параметры отображения вашего семейного древа
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="treeName">Название древа</Label>
                    <Input id="treeName" placeholder="Моё семейное древо" />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <Button variant="outline">Экспорт данных</Button>
                    <Button variant="destructive">Очистить древо</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default CreateTree;
