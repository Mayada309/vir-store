import { Input } from '../ui/input';
import { Label } from '../ui/label';

function FromInput({
  type,
  id,
  name,
  placeholder,
  disabled,
}: {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
}) {
  return (
    <div className='grid sm:max-w-sm items-center gap-1.5'>
      <Label htmlFor={id} className='text-slate-700 capitalize'>
        {name}
      </Label>
      <Input
        id={id}
        name={name}
        className='rounded border-slate-300 text-slate-600'
        type={type}
        placeholder={placeholder}
        disabled = {disabled}
      />
    </div>
  );
}

export default FromInput;
