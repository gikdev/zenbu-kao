import {
  ChatCircleDotsIcon,
  PackageIcon,
  PenNibIcon,
  ReadCvLogoIcon,
  SquaresFourIcon,
  WrenchIcon,
} from '@phosphor-icons/react'
import { CardItem } from './CardItem'

export const cardItems: CardItem[] = [
  new CardItem(ReadCvLogoIcon, 'رزومه', 'دانلود رزومه‌ی من', null),
  new CardItem(ChatCircleDotsIcon, 'تماس', 'راه‌های ارتباطی و شبکه‌های مجازی', null),
  new CardItem(SquaresFourIcon, 'برنامک‌ها', 'برنامه‌ها و ابزارهای کاربردی', null),
  new CardItem(PenNibIcon, 'بلاگ', 'نوشته‌ها، آموزش‌ها، و مقالات', null),
  new CardItem(WrenchIcon, 'خدمات', 'چیزهایی که ارائه میدم', null),
  new CardItem(PackageIcon, 'محصولات', 'محصولات دیجیتال من', null),
]
