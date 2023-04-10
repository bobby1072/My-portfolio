interface IBackdropProps {
  setProjectFalse: () => void;
}
function Backdrop(props: IBackdropProps) {
  return <div className="backdrop" onClick={props.setProjectFalse} />;
}
export default Backdrop;
