import { useRef } from "react";
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
  disabled?: boolean;
}

export function ServiceCheckbox({
  id,
  label,
  description,
  icon: Icon,
  checked,
  onCheckedChange,
  disabled,
}: ServiceCheckboxProps) {
  const checkboxRef = useRef<HTMLButtonElement>(null);

  const trigger = () => {
    if (disabled) return;
    checkboxRef.current?.click(); // ✅ uma única fonte de toggle (o Checkbox)
  };

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group",
        checked
          ? "border-accent bg-accent/5 shadow-sm"
          : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/30",
        disabled && "opacity-60 cursor-not-allowed"
      )}
      onClick={trigger}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disabled ? true : undefined}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault(); // ✅ evita scroll/duplo disparo
          trigger();
        }
      }}
    >
      {/* Ícone: clique cai no container (seleciona) */}
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
        {/* ✅ REMOVIDO stopPropagation: clicar no texto também seleciona */}
        <Label className="text-base font-medium cursor-pointer text-foreground block">
          {label}
        </Label>

        {description && (
          // ✅ REMOVIDO stopPropagation: clicar na descrição também seleciona
          <p className="text-sm text-muted-foreground mt-0.5">
            {description}
          </p>
        )}
      </div>

      {/* Checkbox: mantém funcionando e não duplica */}
      <Checkbox
        ref={checkboxRef}
        id={id}
        checked={checked}
        onCheckedChange={(v) => onCheckedChange(v === true)}
        onClick={(e) => e.stopPropagation()} // ✅ evita o container clicar +1 vez
        type="button" // ✅ evita submit dentro do form
        disabled={disabled}
      />
    </div>
  );
}
