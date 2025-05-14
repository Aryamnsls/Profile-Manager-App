export default function SearchFilter({ search, setSearch }) {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search by name or location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full max-w-md"
      />
    </div>
  );
}
