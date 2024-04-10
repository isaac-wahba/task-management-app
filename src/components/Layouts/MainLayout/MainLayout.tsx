import { ReactNode } from "react";
import "./MainLayout.scss";
interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
