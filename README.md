# 云测榜

一个适合部署到 Cloudflare Pages 的静态排行榜 MVP。

## 项目结构

- `index.html`：页面结构与 SEO 基础信息
- `styles.css`：响应式视觉样式
- `app.js`：演示数据、筛选、排序、详情和对比交互
- `favicon.svg`：站点图标
- `_headers`：Cloudflare Pages 响应头

## 本地预览

项目不依赖 Node.js 或构建工具，直接用任意静态服务器预览即可：

```bash
python3 -m http.server 8080
```

然后打开 <http://localhost:8080>。

也可以直接双击 `index.html`，但使用静态服务器更接近 Cloudflare Pages 的真实环境。

## 上传到 GitHub

在 GitHub 新建一个空仓库，例如 `yunceb`，不要勾选自动创建 README、`.gitignore` 或 License。然后在项目目录执行：

```bash
git init
git add .
git commit -m "Build initial Yunceb rankings MVP"
git branch -M main
git remote add origin https://github.com/你的用户名/yunceb.git
git push -u origin main
```

将最后一条命令中的地址换成你的 GitHub 仓库地址。

## Cloudflare Pages + GitHub

1. 登录 Cloudflare，打开 **Workers & Pages**。
2. 选择 **Create application → Pages → Connect to Git**。
3. 选择 GitHub 仓库。
4. 构建设置保持：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `/`
5. 保存并部署。

每次推送到默认分支后，Cloudflare Pages 会自动重新部署。

## 当前版本

- 响应式首页和排行榜
- 综合、稳定性、性价比、流媒体 & AI 四种排序
- 名称 / 标签搜索
- 测试地区和预算筛选
- 服务详情弹窗
- 2 至 4 个服务对比
- 基础评分方法、指南入口和 SEO 描述
- 不需要服务器或数据库，数据暂时维护在 `app.js`

## 下一阶段

建议按这个顺序继续：

1. 把 `app.js` 里的静态数据迁移到 Cloudflare D1 或 GitHub 管理的 JSON。
2. 增加 `/services/服务名`、`/compare/...` 等可被搜索引擎收录的独立页面。
3. 增加 Cloudflare Workers 定时测试和数据更新时间记录。
4. 加入后台数据编辑、评论审核和异常提醒。
