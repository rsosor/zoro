import Icon from './Icon'; // 引入剛才抽出去的組件

// --- 組件: 固定在側邊的開戶按鈕 ---
const FloatingActionButton = () => {
  const socialLinks = {
    openAccountUrl: "https://onlineopen.kgifutures.com.tw/openaccount/client/#/oa/createCase?oa_branch=000&sales_person_id=80248&sourceType=F",
  }
  return (
    <div className="fixed right-6 bottom-10 z-[200] flex flex-col items-end group">
      <div className="mb-2 px-3 py-1 bg-white text-green-700 text-xs font-bold rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
        開戶享優惠
      </div>
      <a 
        href={socialLinks.openAccountUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(22,163,74,0.6)] hover:bg-green-500 hover:scale-110 transition-all duration-300 animate-pulse-subtle"
      >
        <Icon name="OpenAcc" className="w-8 h-8" />
      </a>
      <div className="mt-2 text-[10px] text-green-500 font-black tracking-widest uppercase bg-[#0b121e]/80 backdrop-blur-sm px-2 py-1 rounded border border-green-500/20">
        立即線上開戶
      </div>
    </div>
  );
};

export default FloatingActionButton;