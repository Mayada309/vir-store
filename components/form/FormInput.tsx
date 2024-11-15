import { Input } from '../ui/input';
import { Label } from '../ui/label';

function FormInput({
  type,
  id,
  name,
  placeholder,
  disabled,
  required,
}: {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}) {
  return (
    <div className='grid items-center gap-1.5'>
      <Label htmlFor={id} className='text-slate-700 capitalize'>
        {name}
      </Label>
      <Input
        id={id}
        name={name}
        className='rounded border-slate-300 text-slate-600'
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}

export default FormInput;
