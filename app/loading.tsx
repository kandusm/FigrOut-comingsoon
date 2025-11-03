export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mb-4"></div>
        <h2 className="text-white text-xl font-semibold">Loading FigrOut...</h2>
      </div>
    </div>
  );
}
