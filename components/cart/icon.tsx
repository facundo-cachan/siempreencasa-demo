/**
 * CartShop Icon & Menu items.
 * @param {string} className optional name classe of styles.
 * @returns {JSX.Element} CartShopIcon with optionals styles and icons.
 */

import { useState } from 'react'
import useAppContext from 'context/app'
import { Buttons, Icon, Modals } from 'components'

export type CartShopIcon = {
   className?: string
   icon: string
   badge?: number | string
}

const CartShopIcon = ({ className }) => {
   const { state } = useAppContext()
   const [showModal, setShowModal] = useState<boolean>(false)
   return (
      <>
         <Buttons.Mask action={setShowModal} id="cart-shopping-btn">
            <Icon icon="cart-shopping"
               badge={state?.length || 0}
               className={className}
            />
         </Buttons.Mask>
         <Modals.Cart
            title="A comprar"
            show={showModal}
            onClose={() => setShowModal(false)}
         />
      </>
   )
}

export default CartShopIcon
