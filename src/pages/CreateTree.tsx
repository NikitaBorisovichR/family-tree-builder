import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const CreateTree = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", birthYear: "" });

  const handleAddPerson = () => {
    if (newPerson.name) {
      setPersons((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          ...newPerson,
          birthYear: newPerson.birthYear
            ? parseInt(newPerson.birthYear)
            : undefined,
        },
      ]);
      setNewPerson({ name: "", birthYear: "" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Создание семейного древа
            </h1>
            <p className="text-lg text-muted-foreground">
              Добавьте членов вашей семьи и создайте интерактивное древо
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="UserPlus" className="h-5 w-5" />
                  Добавить члена семьи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={newPerson.name}
                    onChange={(e) =>
                      setNewPerson((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="Введите имя"
                  />
                </div>
                <div>
                  <Label htmlFor="birthYear">Год рождения</Label>
                  <Input
                    id="birthYear"
                    value={newPerson.birthYear}
                    onChange={(e) =>
                      setNewPerson((prev) => ({
                        ...prev,
                        birthYear: e.target.value,
                      }))
                    }
                    placeholder="1990"
                    type="number"
                  />
                </div>
                <Button onClick={handleAddPerson} className="w-full">
                  <Icon name="Plus" className="mr-2 h-4 w-4" />
                  Добавить
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" className="h-5 w-5" />
                  Члены семьи ({persons.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {persons.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon
                      name="Users"
                      className="h-12 w-12 mx-auto mb-4 opacity-50"
                    />
                    <p>Пока нет добавленных членов семьи</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {persons.map((person) => (
                      <div
                        key={person.id}
                        className="flex items-center gap-3 p-3 border rounded-lg"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="User" className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{person.name}</p>
                          {person.birthYear && (
                            <p className="text-sm text-muted-foreground">
                              Год рождения: {person.birthYear}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateTree;
