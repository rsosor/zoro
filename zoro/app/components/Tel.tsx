"use client"

export default function Tel() {
  const salesInfo = {
    name: "張小明",
    phone: "+886912345678"
  };

  const handleCall = () => {
    // 雖然 <a> 標籤最簡單，但有時我們會用 window.location 來觸發
    window.location.href = `tel:${salesInfo.phone}`;
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm max-w-sm">
      <h3 className="text-lg font-bold">專屬營業員：{salesInfo.name}</h3>
      <p className="text-gray-600 mb-4">服務時間：09:00 - 18:00</p>
      
      <button 
        onClick={handleCall}
        className="flex items-center justify-center w-full gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-full transition-colors"
      >
        <span>📞</span> 立即撥打電話
      </button>
    </div>
  );
}