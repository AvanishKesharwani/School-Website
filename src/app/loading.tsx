export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#F8F8F5]/80 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center gap-4 pointer-events-none">
      <div className="bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce">
        <div className="w-5 h-5 rounded-full border-2 border-[#0F2747] border-t-transparent animate-spin" />
        <span className="text-[#0F2747] font-bold text-sm tracking-wide uppercase">Processing...</span>
      </div>
    </div>
  );
}
