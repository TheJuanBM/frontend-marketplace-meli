type ConditionOptions = {
  [key in string]: string;
};

const conditionOptions: ConditionOptions = {
  new: "Nuevo",
  used: "Usado",
  not_specified: "No especificado",
};

export function currentStatus(conditionApi: string) {
  return conditionOptions[conditionApi] || "Sin definir";
}
