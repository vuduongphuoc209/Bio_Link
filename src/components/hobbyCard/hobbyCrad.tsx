import styles from "@/styles/Hobbies.module.scss"
import classNames from "classnames/bind"
import { Hobby } from "@/data/hobbies"

const cx = classNames.bind(styles)

interface Props {
  hobby: Hobby
}

export default function HobbyCard({ hobby }: Props) {
  return (
    <div className={cx("card")}>
      <h2>{hobby.title}</h2>
      <p>{hobby.description}</p>
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