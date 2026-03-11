import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Language = "vi" | "en";

type Dictionary = Record<string, string>;

type Dictionaries = Record<Language, Dictionary>;

const dictionaries: Dictionaries = {
  vi: {
    nav_home: "Trang chủ",
    nav_project: "Dự án",
    nav_about: "Giới thiệu",
    nav_hobbie: "Sở thích",
    nav_contact: "Liên hệ",

    header_theme_light: "Sáng",
    header_theme_dark: "Tối",

    home_full_name: "Họ và tên",
    home_description: "Mô tả",
    home_age: "Tuổi",
    home_email: "Email",
    home_phone: "Số điện thoại",
    home_years_old: "tuổi",
    home_edit_profile: "Chỉnh sửa hồ sơ",
    home_save: "Lưu",
    home_cancel: "Hủy",

    home_profile_description: `Tôi là một Full-Stack Developer tỉ mỉ và tận tâm, có kinh nghiệm xây dựng các ứng dụng web responsive và có khả năng mở rộng.
Tôi chuyên về các công nghệ hiện đại như React, Next.js và Node.js, tập trung vào kiến trúc sạch và code dễ bảo trì.

Tôi luôn học hỏi liên tục và mang đến các giải pháp chất lượng cao nhằm nâng cao trải nghiệm người dùng và đáp ứng mục tiêu kinh doanh.`,

    about_title: "Giới thiệu",
    about_subtitle: "Hành trình, kỹ năng và kinh nghiệm của tôi",
    about_sectionTitle1: "Học vấn",
    about_sectionTitle2: "Kỹ năng lập trình",
    about_sectionTitle3: "Kỹ năng mềm",

    hobbies_title: "Phong cách sống & Sở thích",

    hobby_item_1_description: "Tôi thích những bản nhạc chill cảm xúc về đêm khi code hoặc thư giãn.",
    hobby_item_2_description: "Tôi chơi guitar acoustic và thu âm những bản cover instrumental nhẹ nhàng.",
    hobby_item_3_description: "Chơi bóng đá giúp tôi năng động hơn và rèn luyện kỹ năng làm việc nhóm.",
    hobby_item_4_description: "Tôi thích làm việc trong một không gian tối giản, mát mẻ và ánh sáng dịu để tập trung sâu.",

    contact_title: "Liên hệ với tôi",
    contact_placeholder_your: "Thông tin của bạn: {{field}}",
    contact_message_placeholder: "Nội dung...",
    contact_send_message: "Gửi tin nhắn",
    contact_sending: "Đang gửi...",
    contact_success: "🎉 Gửi tin nhắn thành công!",
    contact_error_required: "{{field}} là bắt buộc",
    contact_error_invalid_email: "Email không hợp lệ",
    contact_subject: "Chủ đề",
    contact_message: "Nội dung",
    project_description: "Dự án của tôi",
    project_title: "Dự án của tôi",
    project_view: "Xem dự án →",

    project_item_1_description: "Tạo bio link cá nhân bằng Next.js và TypeScript.",
    project_item_2_description: "Tạo website thương mại điện tử bằng React và Node.js.",
    project_item_3_description: "Tạo nền tảng mạng xã hội bằng React và Node.js.",
    project_item_4_description: "Game",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_project: "Project",
    nav_hobbie: "Hobbie",
    nav_contact: "Contact",

    header_theme_light: "Light",
    header_theme_dark: "Dark",

    home_full_name: "Full Name",
    home_description: "Description",
    home_age: "Age",
    home_email: "Email",
    home_phone: "Phone",
    home_years_old: "years old",
    home_edit_profile: "Edit Profile",
    home_save: "Save",
    home_cancel: "Cancel",

    home_profile_description: `I am a dedicated and detail-oriented Full-Stack Developer with experience in building responsive and scalable web applications.
I specialize in modern technologies such as React, Next.js, and Node.js, with a strong focus on clean architecture and maintainable code.

I am committed to continuous learning and delivering high-quality solutions that enhance user experience and meet business objectives.`,

    about_title: "About Me",
    about_subtitle: "My journey, skills, and experiences",
    about_sectionTitle1: "Education",
    about_sectionTitle2: "Programming Skills",
    about_sectionTitle3: "Additional Skills",

    hobbies_title: "My Lifestyle & Hobbies",

    hobby_item_1_description: "I enjoy emotional late-night chill songs while coding or relaxing.",
    hobby_item_2_description: "I play acoustic guitar and record soft instrumental covers.",
    hobby_item_3_description: "Playing football helps me stay active and build teamwork skills.",
    hobby_item_4_description: "I love working in a cool, minimal, softly-lit environment for deep focus.",

    contact_title: "Contact Me",
    contact_placeholder_your: "Your {{field}}",
    contact_message_placeholder: "Your Message...",
    contact_send_message: "Send Message",
    contact_sending: "Sending...",
    contact_success: "🎉 Message sent successfully!",
    contact_error_required: "{{field}} is required",
    contact_error_invalid_email: "Invalid email format",
    contact_subject: "Subject",
    contact_message: "Message",
    project_description: "My Projects",
    project_title: "My Projects",
    project_view: "View project →",

    project_item_1_description: "Create a personal bio link using Next.js and TypeScript.",
    project_item_2_description: "Create an e-commerce shop using React and Node.js.",
    project_item_3_description: "Create a social media platform using React and Node.js.",
    project_item_4_description: "Game",
  },
};

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = "my-bio.language";

function format(template: string, params?: Record<string, string | number>) {
  if (!params) return template;
  return Object.keys(params).reduce((acc, k) => {
    return acc.replaceAll(`{{${k}}}`, String(params[k]));
  }, template);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "vi" || saved === "en") {
      setLanguageState(saved);
      return;
    }

    const browserLang = window.navigator.language?.toLowerCase() ?? "";
    const initial: Language = browserLang.startsWith("vi") ? "vi" : "en";
    setLanguageState(initial);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      const dict = dictionaries[language];
      const template = dict[key] ?? dictionaries.en[key] ?? key;
      return format(template, params);
    },
    [language]
  );

  const value = useMemo<I18nContextValue>(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
