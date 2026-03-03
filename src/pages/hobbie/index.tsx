import styles from "@/styles/Hobbies.module.scss"
import classNames from "classnames/bind"
import { hobbies } from "@/data/hobbies"
import HobbyCard from "@/components/hobbyCard/hobbyCrad"
import { useI18n } from "@/contexts/i18n"

const cx = classNames.bind(styles)

export default function Hobbies() {
  const { t } = useI18n()

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>{t("hobbies_title")}</h1>

      <div className={cx("grid")}>
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} />
        ))}
      </div>
    </div>
  )
}