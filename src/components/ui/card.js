export const Card = ({ children }) => (
  <div style={{ background: "white", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
    {children}
  </div>
);
export const CardContent = ({ children, className = "p-4" }) => (
  <div className={className}>{children}</div>
);
