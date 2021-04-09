# Ledger Management System

台账管理系统——前端项目

## Build Setup

```bash
# 克隆项目
git clone https://github.com/LedgerManagementSystem/ledger-management-system.git

# 进入项目目录
cd ledger-management-system

# 安装依赖
npm install

# 使用镜像站加速下载
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:8080](http://localhost:8080)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |

## License

[MIT](https://github.com/LedgerManagementSystem/ledger-management-system/main/LICENSE) license.

Copyright (c) 2021-present LedgerManagementSystem

## 特别鸣谢

<table align="center" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="center" valign="middle" width="250">
        <a href="https://cn.vuejs.org/" title="多会" target="_blank">
          <img width="120px" src="https://cn.vuejs.org/images/logo.png" title="Vue.js">
          <p>Vue.js</p>
        </a>
      </td>
      <td align="center" valign="middle" width="250">
        <a href="https://github.com/PanJiaChen/vue-element-admin/" title="element-ui-admin" target="_blank">
          <img width="120px" src="https://panjiachen.github.io/vue-element-admin-site/home.png">
          <p>element-ui-admin</p>
        </a>
      </td>
    </tr>
  </tbody>
</table>
