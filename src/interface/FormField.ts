interface Visible {
  relationField: string;
  relationValue:
    | string
    | ((relationValue: string | number | boolean) => boolean);
}

interface Option {
  label: string;
  value: string | number | boolean;
}

export interface Field {
  label: string;
  id: string;

  type: 'input' | 'select';

  placeholder?: string;

  // visible
  visible: Visible;

  options?: Option;
}
