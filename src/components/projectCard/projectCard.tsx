import classNames from "classnames/bind";
import styles from "./project.module.scss";
import { ProjectItem } from "@/types/project";
import { useI18n } from "@/contexts/i18n";

const cx = classNames.bind(styles);

interface Props {
  project: ProjectItem;
}

export default function ProjectCard({ project }: Props) {
  const { t } = useI18n();

  return (
    <div className={cx("card")}>
      <img src={project.image} alt={project.title} className={cx("image")} />

      <div className={cx("content")}>
        <h2>{project.title}</h2>

        <p className={cx("description")}>{project.description}</p>

        <div className={cx("tools")}>
          {project.tools.map((tool, index) => (
            <span key={index}>{tool}</span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={cx("link")}
        >
          {t("project_view")}
        </a>
      </div>
    </div>
  );
}