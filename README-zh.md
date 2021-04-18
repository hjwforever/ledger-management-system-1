# ledger-management-system
    台账管理系统的前端项目
## 项目构建
```
npm install
```

### 开发环境运行
```
npm run dev
```

### 生产环境编译
```
npm run build
```


## Docker
```
## 拉取镜像
docker pull aruoxi/lms-frontend

## 运行至3000端口
docker run -p 3000:80 \
-d --name lms-frontend \
aruoxi/lms-frontend
```
