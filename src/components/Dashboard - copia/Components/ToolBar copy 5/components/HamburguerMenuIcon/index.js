import './HamburguerMenuIcon.styles.css'

export const HamburguerMenuIcon = ({ showSidebar }: any) => {
  return (
    <div className="btn">
      <input type="checkbox" id="btn-menu" onClick={showSidebar} />
      <label htmlFor="btn-menu" className="lbl-menu">
        <span id="spn1"></span>
        <span id="spn2"></span>
        <span id="spn3"></span>
      </label>
    </div>
  )
}
