interface ComponentBProps {
  name: string;
}
const ComponentB = ({ name }: ComponentBProps) => {
  return <div className="merah">Welcome, {name} </div>;
};

export default ComponentB;
