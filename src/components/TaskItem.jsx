export default function TaskItem({text, onDelete}) {
  return (
    <li className="flex justify-between my-4">
      <span>{text}</span>
      <button onClick={()=>{onDelete()}} className="text-stone-700 hover:text-red-500">Clear</button>
    </li>
  );
}
