// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // Google analytics integration
  const GA_MEASUREMENT_ID = 'G-WCYE3ZF8Z7'
  if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
    ;(function (i, s, o, g, r, a, m) {
      i['dataLayer'] = i['dataLayer'] || []
      i[r] =
        i[r] ||
        function () {
          dataLayer.push(arguments)
        }
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g + '?id=' + GA_MEASUREMENT_ID
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.googletagmanager.com/gtag/js', 'gtag')

    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })

    console.log(123123)

    router.afterEach(function (to) {
      gtag('config', GA_MEASUREMENT_ID, { page_path: to.fullPath })
      gtag('event', 'page_view', { send_to: GA_MEASUREMENT_ID })
    })
  }
}
