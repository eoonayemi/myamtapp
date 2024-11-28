import React from "react";

interface ContentCardProps {
  id: string;
  title: string;
  description?: string;
  cardStyles?: string;
  titleStyles?: string;
  desStyles?: string;
  tdStyles?: string;
  children?: React.ReactNode;
}

const SectionBox = ({
  id,
  title,
  description,
  cardStyles,
  titleStyles,
  desStyles,
  tdStyles,
  children,
}: ContentCardProps) => {
  return (
    <section
      id={id}
      className={`${cardStyles} h-fit font-thin responsive-p flex flex-col max-sm:justify-center {md:items-center}`}
    >
      <div
        className={`${tdStyles} flex text-center flex-1 leading-relaxed flex-col gap-10 items-center justify-center`}
      >
        <h1
          className={`${titleStyles} md:text-3xl text-2xl leading-normal lg:leading-snug font-bold`}
        >
          {title}
        </h1>
        {description && <p className={`${desStyles}`}>{description}</p>}
      </div>
      {children}
    </section>
  );
};

export default SectionBox;
