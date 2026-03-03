import styles from "@/styles/Hobbies.module.scss"
import classNames from "classnames/bind"
import { Hobby } from "@/data/hobbies"
import { useI18n } from "@/contexts/i18n"

const cx = classNames.bind(styles)

interface Props {
  hobby: Hobby
}

export default function HobbyCard({ hobby }: Props) {
  const { t } = useI18n()

  return (
    <div className={cx("card")}>
      <h2>{hobby.title}</h2>
      <p>{t(hobby.description)}</p>
        {hobby.image && (
            <div className={cx("imageWrapper")}>
                <img src={hobby.image} alt={hobby.title} />
            </div>
        )}
        {hobby.video && (
          <div className={cx("videoWrapper")}>
            <video
              src={hobby.video}
              controls
              muted
              loop
            />
          </div>
        )}
      {hobby.embed && (
        <iframe
          src={hobby.embed}
          width="100%"
          height="200"
          style={{ borderRadius: "12px" }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      )}
      
    </div>
  )
}