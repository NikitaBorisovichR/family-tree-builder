import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Person } from "@/types/person";

export const useTreeActions = (addPerson: (person: Person) => void) => {
  const { toast } = useToast();
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [activeTab, setActiveTab] = useState("canvas");

  const handleSelectPerson = (person: Person) => {
    setSelectedPerson(person);
    setActiveTab("details");

    toast({
      title: "Персона выбрана",
      description: `${person.name || "Без имени"} теперь активна для редактирования`,
    });
  };

  const handleAddPerson = () => {
    const newPerson: Person = {
      id: `person_${Date.now()}`,
      name: "Новая персона",
      generation: 0,
    };

    addPerson(newPerson);
    setSelectedPerson(newPerson);
    setActiveTab("details");

    toast({
      title: "Персона добавлена",
      description: "Новая персона успешно добавлена в ваше древо",
    });
  };

  const handleViewCanvas = () => {
    setActiveTab("canvas");
  };

  return {
    selectedPerson,
    setSelectedPerson,
    activeTab,
    setActiveTab,
    handleSelectPerson,
    handleAddPerson,
    handleViewCanvas,
  };
};
