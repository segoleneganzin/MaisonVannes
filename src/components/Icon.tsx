interface I_IconProps {
  icon: string;
  className?: string;
}

const Icon: React.FC<I_IconProps> = ({ icon, className }) => {
  return <img src={icon} alt='' className={`${className} icon`} />;
};

export default Icon;
