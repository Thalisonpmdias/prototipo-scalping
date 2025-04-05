export const Button = ({ children, className = "", onClick, variant }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);
