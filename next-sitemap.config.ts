import type { IConfig, ISitemapField } from "next-sitemap";

/** @type {import('next-sitemap').IConfig} */
const config: IConfig = {
  siteUrl: "https://xn--o3c1bj3b4bj8cd.com/",

  generateRobotsTxt: true, // สร้างไฟล์ robots.txt

  // (จำเป็นสำหรับโดเมนภาษาไทย)
  // ฟังก์ชันนี้จะช่วยแปลง URL ภาษาไทย (IDN) ให้เป็น Punycode ที่ถูกต้อง
  transform: async (config, path): Promise<ISitemapField> => {
    try {
      // สร้าง URL ที่ถูกต้องจาก path และ siteUrl
      const newPath = new URL(path, config.siteUrl).href;

      return {
        loc: newPath, // URL ที่แปลงแล้ว
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        changefreq: config.changefreq,
        priority: config.priority,
        alternateRefs: config.alternateRefs ?? [],
      };
    } catch (e) {
      console.error(`Error transforming path: ${path}`, e);
      // คืนค่า path เดิมถ้ามีปัญหา
      return {
        loc: path,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
  },
};

export default config;
