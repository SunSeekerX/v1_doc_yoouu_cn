# Nginx

## 📌 问题记录

### 反向代理出现 `MIME type` 不正确

```
Refused to apply style from 'https://docker.yoouu.cn/main.36f5bcea156ed2e3cca6.css' because its MIME type ('text/plain') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
```

可以尝试修改方向代理 `http://127.0.0.1:9000` 为 `http://localhost:9000` 进行尝试，原因未知。

---
