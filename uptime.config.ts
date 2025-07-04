// pageConfig 配置：状态页的基本设置
const pageConfig = {
  // 状态页的标题
  title: "枕上诗书闲的状态页", 
  // 状态页头部的链接
  links: [
    { link: 'https://587459.xyz', label: 'Serverless 页面' },
    { link: 'https://blog.587459.xyz', label: 'Blog' },
    { link: 'https://img.587459.xyz', label: '图床' },
    { link: 'https://git.587459.xyz', label: 'GitHub 加速' },
    { link: 'https://um1.hanli.dpdns.org', label: '音乐解锁(ord)' },
    { link: 'https://um2.hanli.dpdns.org', label: '音乐解锁(new)' },
  ],
}

// workerConfig 配置：服务监控相关设置
const workerConfig = {
  // 最小数据保存时间为 10 分钟，避免频繁写入 KV 存储
  kvWriteCooldownMinutes: 10,

  // 定义所有监控项
  monitors: [
    // Serverless 页面监控
    {
      id: 'serverless_monitor',
      name: 'Serverless 页面',
      method: 'GET',
      target: 'https://587459.xyz',
      expectedCodes: [200], // 期望的 HTTP 状态码
      timeout: 10000, // 超时 10 秒
    },
    // 博客监控
    {
      id: 'blog_monitor',
      name: '博客',
      method: 'GET',
      target: 'https://blog.587459.xyz',
      expectedCodes: [200],
      timeout: 10000,
    },
    // 图床监控
    {
      id: 'img_monitor',
      name: '图床',
      method: 'GET',
      target: 'https://img.587459.xyz',
      expectedCodes: [200],
      timeout: 10000,
    },
    // GitHub 加速监控
    {
      id: 'git_monitor',
      name: 'GitHub 加速',
      method: 'GET',
      target: 'https://git.587459.xyz',
      expectedCodes: [200],
      timeout: 10000,
    },
    // 音乐解锁(ord)监控
    {
      id: 'um1_monitor',
      name: '音乐解锁(ord)',
      method: 'GET',
      target: 'https://um1.hanli.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
    },
    // 音乐解锁(new)监控
    {
      id: 'um2_monitor',
      name: '音乐解锁(new)',
      method: 'GET',
      target: 'https://um2.hanli.dpdns.org',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],

  // 删除邮件通知相关配置，暂时不需要通知
  notification: {},

  // 删除 callbacks 配置
}

// 导出配置
export { pageConfig, workerConfig }
