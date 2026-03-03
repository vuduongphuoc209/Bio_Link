import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "@/styles/Home.module.scss";
import { useI18n } from "@/contexts/i18n";

const cx = classNames.bind(styles);

interface Profile {
  name: string;
  age: number;
  descripton: string;
  email: string;
  phone: string;
  avatar: string;
}

export default function Home() {
  const [isEditing, setIsEditing] = useState(false);
  const [typedName, setTypedName] = useState("");
  const { t } = useI18n();

  const [profile, setProfile] = useState<Profile>({
    name: "Vu Duong Phuoc",
    descripton: `I am a dedicated and detail-oriented Full-Stack Developer with experience in building responsive and scalable web applications.
I specialize in modern technologies such as React, Next.js, and Node.js, with a strong focus on clean architecture and maintainable code.

I am committed to continuous learning and delivering high-quality solutions that enhance user experience and meet business objectives.`,
    age: 21,
    email: "phuocvu@gmail.com",
    phone: "0987654321",
    avatar: "",
  });

  // Typing Effect
  useEffect(() => {
    let index = 0;
    setTypedName("");

    const interval = setInterval(() => {
      setTypedName(profile.name.slice(0, index + 1));
      index++;
      if (index === profile.name.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [profile.name]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  return (
    <div className={cx("home")}>
      <div className={cx("container")}>
        {/* LEFT */}
        <div className={cx("left")}>
          <img src={profile.avatar} className={cx("avatar")} />
        </div>

        {/* RIGHT */}
        <div className={cx("right")}>
          <div className={cx("content")}>

            {isEditing ? (
              <div className={cx("editForm")}>

                <div className={cx("formGroup")}>
                  <label>{t("home_full_name")}</label>
                  <input
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={cx("formGroup")}>
                  <label>{t("home_description")}</label>
                  <textarea
                    name="descripton"
                    value={profile.descripton}
                    onChange={handleChange}
                  />
                </div>

                <div className={cx("formRow")}>
                  <div className={cx("formGroup")}>
                    <label>{t("home_age")}</label>
                    <input
                      name="age"
                      type="number"
                      value={profile.age}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={cx("formGroup")}>
                    <label>{t("home_email")}</label>
                    <input
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={cx("formGroup")}>
                  <label>{t("home_phone")}</label>
                  <input
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={cx("buttonGroup")}>
                  <button
                    className={cx("saveBtn")}
                    onClick={() => setIsEditing(false)}
                  >
                    {t("home_save")}
                  </button>

                  <button
                    className={cx("cancelBtn")}
                    onClick={() => setIsEditing(false)}
                  >
                    {t("home_cancel")}
                  </button>
                </div>

              </div>
            ) : (
              <>
                <h1 className={cx("name")}>
                  {typedName}
                  <span className={cx("cursor")}>|</span>
                </h1>

                <p className={cx("description")}>
                  {profile.descripton}
                </p>

                <p className={cx("age")}>
                  🎂 {profile.age} {t("home_years_old")}
                </p>
                <p className={cx("email")}>📧 {profile.email}</p>
                <p className={cx("phone")}>📱 {profile.phone}</p>

                <button
                  className={cx("editBtn")}
                  onClick={() => setIsEditing(true)}
                >
                  {t("home_edit_profile")}
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}