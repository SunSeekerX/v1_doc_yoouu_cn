# Android - 问题

1. MaterialCardView 设置边框颜色不生效

   ```kotlin
   // 直接设置不行的
   mCardVipType?.strokeColor = R.color.common_color_vip_stroke_selected
   // 需要这样设置
   mCardVipType.strokeColor = ContextCompat.getColor(
     this@VipActivity,
     R.color.common_color_vip_stroke_selected
   )
   ```

2. recycleview + StaggeredGridLayoutManager 实现瀑布流 放在 viewpaer2 里面，滑动列表，瀑布流列表高度重新排列。

   看问题：[https://stackoverflow.com/questions/65539771/recyclerview-with-staggeredgridlayoutmanager-in-viewpager-arranges-items-automa](https://stackoverflow.com/questions/65539771/recyclerview-with-staggeredgridlayoutmanager-in-viewpager-arranges-items-automa)

   他用的 viewpager 我用的 viewpager2，用 viewpaer 整个 recycleview 都重新渲染。。。

   无解。

