import Menu from "../Menu";

interface Props {
  children: React.ReactNode;
  isNotFoundPage?: boolean;
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="wrapper-layout">
        <Menu />
        <div className="main-layout">{children}</div>
      </div>
    </>
  );
};
