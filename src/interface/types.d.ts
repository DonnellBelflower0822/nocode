import { Field } from './FormField';

interface Material {
  title: string;
  id: string;
  preview?: string;
  fields: Field[];
}

interface Materials {
  title: string;
  children: Material[];
}
