import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCheckboxProps {
  id: string;
  label: string;
  description?: string;
  icon: LucideIcon;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function ServiceCheckbox({
  id,
  label,
  description,
  icon: Icon,
  checked,
  onCheckedChange,
}: ServiceCheckboxProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group",
        checked
          ? "border-accent bg-accent/5 shadow-sm"
          : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30"
      )}
      onClick={() => onCheckedChange(!checked)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onCheckedChange(!checked);
      }}
    >
      <div
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200",
          checked
            ? "bg-accent text-accent-foreground"
            : "bg-muted text-muted-foreground group-hover:bg-muted-foreground/10"
        )}
      >
        <Icon className="w-5 h-5" />
      </div>

      <div className="flex-1">
        {/* ✅ Sem htmlFor para não disparar o checkbox + o onClick da div */}
        <Label
          className="text-base font-medium cursor-pointer text-foreground block"
          onClick={(e) => e.stopPropagation()}
        >
          {label}
        </Label>

        {description && (
          <p className="text-sm text-muted-foreground mt-0.5" onClick={(e) => e.stopPropagation()}>
            {description}
          </p>
        )}
      </div>

      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
