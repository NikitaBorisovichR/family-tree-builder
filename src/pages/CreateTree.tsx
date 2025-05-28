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
      description: "Персона успешно удалена из вашего древа",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Создание семейного древа</h1>
          <TreeActions
            onViewCanvas={handleViewCanvas}
            onAddPerson={handleAddPerson}
          />
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="canvas">Древо</TabsTrigger>
            <TabsTrigger value="details" disabled={!selectedPerson}>
              Детали персоны
            </TabsTrigger>
            <TabsTrigger value="settings">Настройки древа</TabsTrigger>
          </TabsList>

          <TabsContent value="canvas" className="border rounded-lg">
            <div className="h-[calc(100vh-300px)] min-h-[500px]">
              {persons.length > 0 ? (
                <TreeCanvas
                  persons={persons}
                  onSelectPerson={handleSelectPerson}
                  selectedPersonId={selectedPerson?.id}
                />
              ) : (
                <EmptyTreeState onAddPerson={handleAddPerson} />
              )}
            </div>
          </TabsContent>

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
