import React from 'react';

interface ParagraphPrimaryProps {
  title: string;
  spanTitle?: string;
  style: string;
  spanStyle?: string;
}

export default function BaseParagraph({
  title,
  spanTitle,
  style,
  spanStyle,
}: ParagraphPrimaryProps) {
  return (
    <div>
      {spanTitle && <span className={spanStyle}>{spanTitle}</span>}
      <h1 className={style}>{title}</h1>
    </div>
  );
}
