/**
 * Custom Icon.
 * @param {string} className optional name classe of styles.
 * @param {string} icon available default is true.
 * @param {number} badge optional, number items.
 * @returns {JSX.Element} Icon with optionals styles and icons.
 */

export type Icon = {
  className?: string
  icon: string
  badge?: number | string
}

const Icon = ({ badge, icon, className }) => (
  <span
    className="p1 fa-stack fa-2x has-badge"
    data-count={badge}
  >
    <i
      className={`p3 fa fa-stack-1x xfa-inverse fa-${icon || 'question'} ${
        className || ''
      }`}
      data-count={badge}
    />
  </span>
)

export default Icon
