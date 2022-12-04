import ReactLoading from 'react-loading';

export default function Loader() {
  return (
    <div style={{height:"60vh",display:"grid",placeItems:"center"}}>
      <ReactLoading type="bars" color="blue" height={'10%'} width={'10%'} />
    </div>
  )
}
