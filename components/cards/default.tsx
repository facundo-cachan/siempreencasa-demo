import { CardType } from '.'
import { Img } from 'components/'
import uuid from 'utils/uuid'

const Default = ({ hashtgs, title, subtitle, description, image_url, price, onClicked }: CardType) => (
   <div className="card">
    {
      image_url && (
      <div className="card-image" onClick={onClicked}>
        <Img src={image_url} alt={title} sizes={[200,200]} />
      </div>
      )
    }

   <div className="card-content">
     <div className="media">
       <div className="media-content">
         <p className="title is-4">{title}</p>
         <p className="subtitle is-6">{subtitle}</p>
         <p>{hashtgs.map((tag: string) => <span key={uuid()}>#{tag}{' '}</span>)}</p>
       </div>
     </div>
      {
        description && (
          <div className="content">
            {description}
          </div>
        )
      }
      <br />
      <p>ARS {price}$</p>
   </div>
   <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        Add
      </span>
    </p>
    <p className="card-footer-item">
      <span>
        Remove
      </span>
    </p>
  </footer>

 </div>
)

export default Default