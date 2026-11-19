import { INSTALL_URL, ISSUES_URL, NPM_URL, REPO_URL } from '../config'
import { en } from './en'

// Thai copy for the changelog and its shared navigation.
export const th: typeof en = {
  ...en,
  meta: {
    ...en.meta,
    description: 'ติดตามและควบคุมเครื่องมือ AI และเซสชัน tmux ผ่านเบราว์เซอร์ โดยข้อมูลเทอร์มินัลยังอยู่บนเครื่องของคุณ',
    ogAlt: 'พื้นที่ทำงานของ tmux.online แสดงงาน AI ที่ต้องการให้คุณตรวจสอบ',
  },
  brand: { ...en.brand, tagline: 'โดย AI Anywhere' },
  nav: {
    ...en.nav,
    primaryLabel: 'เมนูหลัก',
    install: 'ติดตั้ง',
    signIn: 'เข้าสู่ระบบ',
    account: 'บัญชี',
    skipToContent: 'ข้ามไปยังเนื้อหา',
  },
  changelog: {
    eyebrow: 'บันทึกประจำรุ่น',
    title: 'ประวัติการเปลี่ยนแปลง',
    description: 'รุ่น วันที่เผยแพร่ และสิ่งที่เปลี่ยนแปลงในแต่ละรุ่นของ AI Anywhere',
    intro: 'สิ่งที่เปลี่ยนแปลงในบริดจ์ CLI ส่วนขยายเบราว์เซอร์ และแดชบอร์ดบนเว็บ เรียงจากรุ่นล่าสุด',
    home: 'หน้าแรก',
    versionPrefix: 'v',
  },
  dashboard: { ...en.dashboard, open: 'เปิดแดชบอร์ด' },
  account: { ...en.account, signedInAs: 'เข้าสู่ระบบในชื่อ' },
  auth: { ...en.auth, switchAccount: 'ใช้บัญชี GitHub อื่น', signOut: 'ออกจากระบบ' },
  membership: {
    ...en.membership,
    premiumBadge: 'สมาชิกพรีเมียม',
    invalidInviteLink: 'ลิงก์เชิญนี้ใช้ไม่ได้ โปรดขอลิงก์ใหม่จากผู้ส่ง',
    dismissInvalidInvite: 'ปิด',
  },
  footer: {
    rights: 'ค่าเริ่มต้นอนุญาตให้ใช้งานบนเครื่องเท่านั้น การเข้าใช้เทอร์มินัลต้องยืนยันตัวตน',
    columns: [
      {
        title: 'โครงการ',
        links: [
          { label: 'GitHub', href: REPO_URL },
          { label: 'แจ้งปัญหา', href: ISSUES_URL },
          { label: 'ประวัติการเปลี่ยนแปลง', href: '/changelog' },
        ],
      },
      {
        title: 'ติดตั้ง',
        links: [
          { label: 'install.sh', href: INSTALL_URL },
          { label: '@ai-anywhere/cli', href: NPM_URL },
        ],
      },
    ],
    langLabel: 'ภาษา',
  },
  analytics: {
    label: 'การตั้งค่าคุกกี้',
    body: 'อนุญาตให้ใช้คุกกี้หรือไม่ หากยอมรับ เราจะใช้คุกกี้วิเคราะห์สถิติการเข้าชมและการใช้งานเว็บไซต์ โดยจะไม่ส่งเนื้อหาเทอร์มินัล คำสั่ง ข้อมูลบัญชี หรือรหัสเชิญ',
    accept: 'ยอมรับ',
    reject: 'ปฏิเสธ',
    settings: 'ตั้งค่าคุกกี้',
  },
}
