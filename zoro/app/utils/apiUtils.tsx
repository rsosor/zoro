/**
 * 專為解決 TypeError: Cannot convert argument to a ByteString 開發的工具集
 */

/**
 * 1. 全域掃描一次 JSON，看看哪筆資料帶有「独」(29151) 或其他中文
 * apiUtils.validateByteString(data, "Initial Post List");
 *
 * 2. 預處理所有路徑
 * const safeData = data.map((post: any) => ({
 *   ...post,
 *   contentPath: apiUtils.safeEncodeURI(post.contentPath),
 * }));
 */
export const apiUtils = {
  /**
   * 檢查字串中是否包含非 ASCII 字元 (Code > 255)
   * 並印出具體錯誤位置與字元，方便除錯
   */
  validateByteString: (input: any, label: string = "Data"): boolean => {
    const str = typeof input === 'string' ? input : JSON.stringify(input);
    let isValid = true;

    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      if (charCode > 255) {
        console.error(`[ByteString 警告] 來源: ${label}`);
        console.error(`索引 ${i} 發現非法字元: "${str[i]}" (Unicode: ${charCode})`);
        console.error(`上下文: ...${str.substring(Math.max(0, i - 10), i + 10)}...`);
        isValid = false;
      }
    }
    return isValid;
  },

  /**
   * 安全地對 URL 進行編碼，並確保不會重複編碼
   */
  safeEncodeURI: (path: string): string => {
    if (!path) return "";
    // 檢查是否已經被編碼過 (避免 % 變成 %25)
    const isAlreadyEncoded = path !== decodeURI(path);
    return isAlreadyEncoded ? path : encodeURI(path);
  }
};