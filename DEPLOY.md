# 部署到 GitHub Pages 指南

## 方法一：通过 GitHub 网页界面创建

### 步骤 1: 在 GitHub 创建仓库
1. 访问 [https://github.com/new](https://github.com/new)
2. 仓库名称：`app-langding`（或你喜欢的名称）
3. 选择 Public（公开仓库才能使用 GitHub Pages）
4. 点击 "Create repository"

### 步骤 2: 推送代码到 GitHub
在终端执行以下命令：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/app-langding.git

# 重命名分支为 main（推荐）
git branch -M main

# 推送代码
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages
1. 访问你的仓库页面
2. 点击 "Settings" 标签页
3. 在左侧菜单中找到 "Pages"
4. 在 "Build and deployment" 下：
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - Folder 选择 "/ (root)"
5. 点击 "Save"

### 步骤 4: 访问你的网站
等待 1-2 分钟后，访问：`https://YOUR_USERNAME.github.io/app-langding/`

---

## 方法二：使用 GitHub CLI（如果已安装）

```bash
# 安装 GitHub CLI（如果未安装）
# macOS: brew install gh

# 登录 GitHub
gh auth login

# 创建仓库并推送
gh repo create app-langding --public --source=. --push

# 启用 GitHub Pages
gh api -X POST repos/:owner/:repo/pages -f source[branch]=main
```

---

## 查看部署状态
- 仓库页面会显示 GitHub Pages 的部署状态
- 可以查看 "Actions" 标签页查看部署日志

---

## 仓库地址占位符
创建完成后，你的网站地址将是：
`https://YOUR_USERNAME.github.io/app-langding/`

其中 `YOUR_USERNAME` 需要替换为你的 GitHub 用户名。
