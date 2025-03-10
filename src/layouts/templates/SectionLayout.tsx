import React from 'react';

interface I_SectionLayoutProps {
  sectionId: string;
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const SectionLayout: React.FC<I_SectionLayoutProps> = ({
  sectionId,
  title,
  className = '',
  children,
}) => {
  return (
    <section id={sectionId} className={`section-layout ${className}`}>
      {title && <h3 className='section-layout__title bold'>{title}</h3>}
      {children}
    </section>
  );
};

export default SectionLayout;
