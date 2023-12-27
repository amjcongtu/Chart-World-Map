import './style.css';

interface LoadingProps {
  size?: string;
}

const Loading = ({ size = '20px' }: LoadingProps) => {
  return (
    <div className="loading-surface">
      <div className="loading-box" style={{ width: size, height: size }} />
    </div>
  );
};

export default Loading;
