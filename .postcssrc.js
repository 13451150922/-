module.exports = {
  plugins: {
    // 配置使用 autoprefixer 插件
    // 作用:生成浏览器 CSS 样式规则前缀
    // 'autoprefixer': {// autoprefixer插件配置
    //   // 配置要兼容到的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },

    // 配置使用 postcss-pxtorem 插件
    // 作用: 把px 转换为 rem
    'postcss-pxtorem': {
      // lib-flexible 的REM 试配方案:把一行分为10份,每份就是十分之一
      // 所以rootValue 应该设置为你的设计稿宽度的十分之一
      // 我们设计稿是 750 ,所以应该设置为750/10 =75
      // 但是 vant 建议设置为37.5 为什么?因为vant是基于 375x写的
      // 设置为37.5,唯一的缺点就是使用我们设计稿的尺寸必须/2
      // 有没有更好的办法?
      // 如果vant的样式,就按照37.5来转换
      // 通过查阅文档, 我们发现rootValue 支持两种类型
      //   数字:固定的数值
      //   函数:可以动态处理
      //        postcss-pxtorem 处理每个Css文件的时候都会来调用函数
      //        它会把处理的css文件相关的信息通过参数传递给该函数
      // file=> 要变异的样式路径
      rootValue({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // rootValue: 37.5,
      // 配置要转换的 CSS 属性
      // * 表示所有
      propList: ['*'],
      exclude: 'github-markdown.css'
    }
  }
}
