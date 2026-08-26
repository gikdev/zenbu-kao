import { CardItemCard } from './CardItemCard'
import { cardItems } from './cardItems'

export const CardItemCardsSection = () => (
  <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
    {cardItems.map(item => (
      <CardItemCard key={item.id} item={item} />
    ))}
  </div>
)
