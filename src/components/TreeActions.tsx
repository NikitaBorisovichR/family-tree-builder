import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface TreeActionsProps {
  onViewCanvas: () => void;
  onAddPerson: () => void;
}

const TreeActions = ({ onViewCanvas, onAddPerson }: TreeActionsProps) => {
  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={onViewCanvas}>
        <Icon name="Eye" className="mr-2 h-4 w-4" />
        Просмотр
      </Button>
      <Button onClick={onAddPerson}>
        <Icon name="UserPlus" className="mr-2 h-4 w-4" />
        Добавить персону
      </Button>
    </div>
  );
};

export default TreeActions;
