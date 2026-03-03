import React from 'react'
import classNames from "classnames/bind";
import styles from "@/styles/Project.module.scss";
import ProjectCard from "@/components/projectCard/projectCard";
import { ProjectItem } from "@/types/project";
import { useI18n } from "@/contexts/i18n";

const cx = classNames.bind(styles);

const Project = () => {
  const { t } = useI18n();

  const projects: ProjectItem[] = [
    {
      id: "1",
      title: "Bio Link App",
      description: "Ứng dụng bio link cá nhân với Next.js và TypeScript.",
      tools: ["Next.js", "TypeScript", "SCSS"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "https://example.com",
    },
    {
      id: "2",
      title: "Ecommerce Shop",
      description: "Một shop bán hàng điện tử với React và Node.js.",
      tools: ["React", "Node", "Express", "MongoDB", "SCSS","Authentication", "JWT"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "https://shop-client-ruddy.vercel.app",
    },
    {
      id: "3",
      title: "Social Media",
      description: "Một nền tảng mạng xã hội với React và Node.js.",
      tools: ["React", "Node", "Express", "MongoDB", "Tailwind CSS", "Authentication", "JWT","Clerk", "Inngest"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "https://social-client-peach.vercel.app",
    },
      {
      id: "4",
      title: "Game",
      description: "Game",
      tools: ["Not"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      link: "",
    },
  ];
  return (
     <div className={cx("projectPage")}>
      <h1 className={cx("title")}>{t("project_title")}</h1>

      <div className={cx("grid")}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Project