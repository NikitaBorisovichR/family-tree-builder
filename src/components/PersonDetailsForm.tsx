import { Person } from "@/types/person";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Icon from "@/components/ui/icon";
import PersonBasicInfo from "@/components/PersonBasicInfo";
import { usePersonForm } from "@/hooks/usePersonForm";

interface PersonDetailsFormProps {
  person: Person;
  onUpdate: (person: Person) => void;
  onRemove: () => void;
  persons: Person[];
}

const PersonDetailsForm = ({
  person,
  onUpdate,
  onRemove,
  persons,
}: PersonDetailsFormProps) => {
  const { formData, handleChange, handleNumberChange, handleSelectChange } =
    usePersonForm(person);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PersonBasicInfo
        formData={formData}
        onChange={handleChange}
        onNumberChange={handleNumberChange}
        onSelectChange={handleSelectChange}
      />

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Семейные связи</h3>

        <div>
          <Label>Поколение</Label>
          <Select
            value={formData.generation?.toString() || "0"}
            onValueChange={(value) => handleSelectChange("generation", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите поколение" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Первое поколение</SelectItem>
              <SelectItem value="1">Второе поколение</SelectItem>
              <SelectItem value="2">Третье поколение</SelectItem>
              <SelectItem value="3">Четвертое поколение</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">
            Поколение определяет вертикальное положение персоны в древе
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" type="button">
              <Icon name="Trash2" className="mr-2 h-4 w-4" />
              Удалить персону
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
              <AlertDialogDescription>
                Это действие нельзя отменить. Персона будет полностью удалена из
                вашего семейного древа.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Отмена</AlertDialogCancel>
              <AlertDialogAction onClick={onRemove}>Удалить</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button type="submit">Сохранить изменения</Button>
      </div>
    </form>
  );
};

export default PersonDetailsForm;
