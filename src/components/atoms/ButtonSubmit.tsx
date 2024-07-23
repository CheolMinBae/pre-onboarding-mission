import 'remixicon/fonts/remixicon.css';

export default function ButtonSubmit() {
  return (
    <button
      type="submit"
      className="rounded-full bg-green-700 w-28pxr h-28pxr overflow-hidden relative"
    >
      <i className="ri-search-line text-20pxr text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
    </button>
  );
}
