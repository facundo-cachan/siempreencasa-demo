import useAppContext from 'context/app'

const Default = () => {
  const {
    submitModalPrimaryBtn,
    modalPrimary: {
      children,
      title,
      btnPrimaryText,
      btnPrimaryColor,
      btnPrimaryAction,
    },
  } = useAppContext()

  return (
    <div id="modal-primary" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          <button
            className={`button ${
              btnPrimaryColor ? btnPrimaryColor : 'is-success'
            }`}
            disabled={submitModalPrimaryBtn}
            onClick={btnPrimaryAction}
          >
            {btnPrimaryText || 'Ok'}
          </button>
          <button className="button is-danger">Cancel</button>
        </footer>
      </div>
    </div>
  )
}

export default Default
